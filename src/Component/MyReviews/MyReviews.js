import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    useTitle("My Review")
    const { user, userSignOut } = useContext(AuthContext);
    const [reviews, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safis-photography-server.vercel.app/user-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("photography-token")}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    userSignOut();
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, userSignOut])
    
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure,you want to delete this order")
        if (proceed) {
            fetch(`https://safis-photography-server.vercel.app/user-reviews/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Successfully delete review")
                        const remaining = reviews.filter(odr => odr._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }
    if (reviews.length === 0) {
        return <div className='w-full text-center mt-36 mb-20'>
            <h2 className='text-5xl font-bold'>Please add a review</h2>

        </div>
    }
    else {
        return (
            <div>
                <div className='w-9/12 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto my-16'>
                    {
                        reviews.map(review =>
                            <MyReviewsRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                user={user}
                            ></MyReviewsRow>
                        )
                    }
                </div>
            </div>

        );
    }

};

export default MyReviews;