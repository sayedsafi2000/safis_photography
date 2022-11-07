import React,{useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ReviewPage = () => {
    const review = useLoaderData();
    const {user}=useContext(AuthContext)
    return (
        <div className='w-10/12 mx-auto'>
            <div className='w-full lg:w-5/12 border-4 p-5 bg-rose-100 rounded-md my-10'>
                <img className='w-9/12 mx-auto' src={review.img} alt="" />
                <h2 className="text-3xl text-center font-bold my-3">{review.title}</h2>
                <p className="text-lg text-justify">{review.description}</p>
                <div className='flex justify-evenly my-5'>
                <span className='font-extrabold'>price :${review.price}</span>
                <span className='font-extrabold'>Rating :{review.rating}</span>
                </div>
            </div>
            <div className='w-full lg:w-7/12'>
                
            </div>
        </div>
    );
};

export default ReviewPage;