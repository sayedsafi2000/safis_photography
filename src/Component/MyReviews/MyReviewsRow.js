import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MyReviewsRow = ({ review, handleDelete }) => {

    console.log(review)
    return (
        <div>
            <div className="card bg-yellow-100 shadow-xl border-2 border-indigo-300">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(review._id)} className="btn btn-square btn-sm" title="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className='border-4 p-5'>

                        <p className='text-xl font-bold'>Service :{review.serviceName}</p>
                        <p className='text-sm font-medium '>Rating :{review.rating} out of 5</p>
                        <p className='text-xs '>Review time :{review.getFullTime}</p>
                        <p className='text-sm font-bold text-gray'>Review : {review.message}</p>
                    </div>

                    <Link to={`/update/${review._id}`}>
                        <button className="py-3 mt-4 btn-primary text-white font-bold w-full" title="update" >
                            Update
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsRow;