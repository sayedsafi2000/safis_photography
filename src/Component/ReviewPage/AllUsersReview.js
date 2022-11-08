import React, { useState, useEffect } from 'react';

const AllUsersReview = () => {
    const [allReview, setAllReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user-review")
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])
    return (
        <div>
            {
                allReview.map(ar =>
                    <>
                        <div className='w-full flex py-3'>
                            <img className='w-14 h-14 rounded-full' src={ar.photoURL} alt="" />
                            <div className=' bg-rose-100 rounded-3xl w-full'>
                                <small className='font-bold  w-full ml-5'>{ar.displayName}</small>
                                <p className='ml-5 text-sm'>Review : "{ar.message}"</p>
                            </div>
                        </div>
                    </>)
            }
        </div>
    );
};

export default AllUsersReview;