import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const UserReview = () => {
    const { title, _id, img, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const placeOrder = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || "unregister";
        const photoURL = user?.photoURL || <FaUser></FaUser>;
        const displayName = user?.displayName || "null";
        const message = form.message.value;
        const order = {
            service:_id,
            serviceName:title,
            displayName,
            price,
            photoURL,
            email,
            message
        }
        fetch("http://localhost:5000/user-review",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={placeOrder} className='' action="">
                <h2 className="text-4xl font-bold my-8">Service : <span className='text-3xl text-gray-600'>{title}</span></h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center my-3'>
                    <p className='font-bold'>Reviewer Name : <span className='text-yellow-600 font-normal'>{user?.email}</span></p>
                    <p className='font-bold'>Reviewer Email : <span className='text-yellow-600 font-normal'>{user?.displayName}</span></p>
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="You can give  your review here..."></textarea>
                <input className='btn btn-primary w-full ' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default UserReview;