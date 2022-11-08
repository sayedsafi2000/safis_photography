import React, { useEffect, useState } from 'react';
const MyReviewsRow = ({ review, handleDelete }) => {
    return (
        <div>
            <div className="card bg-yellow-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(review._id)} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p className='text-xl font-bold text-black'>Service :{review.serviceName}</p>
                    <p className='text-sm font-bold text-gray'>Review : {review.message}</p>

                    <button className="btn gtn-primary">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsRow;