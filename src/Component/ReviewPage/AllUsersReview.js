import React, { useState, useEffect } from 'react';

const AllUsersReview = ({id}) => {
    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicereviewbyid/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllReview(data)})
    }, [id])
    // console.log(allReview)
    return (
        <div>
            {
                allReview.map(ar =>
                    <div key={ar._id}>
                        <div className='w-full flex py-3 items-center '>
                            <img className='w-14 h-14 rounded-full mr-3' src={ar.photoURL} alt="" />
                            <div className=' bg-rose-100 rounded-3xl w-full py-2'>
                                <small className='font-bold  w-full ml-5'>{ar.displayName}</small>
                                <p className='font-bold text-xs w-full ml-5'>Service Name : {ar.serviceName}</p>
                                <p className='font-bold text-xs w-full ml-5'>Rating : {ar.rating}</p>
                                
                                <p className='ml-5 text-sm'>Review : "{ar.message}"</p>
                                <p className='font-bold text-[10px] w-full ml-5'>Time & Date : {ar.getFullTime}</p>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default AllUsersReview;