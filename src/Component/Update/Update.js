import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div className='w-full'>
            <h2 className="text-3xl font-bold text-center my-10">Update Your Review</h2>
            <form className='w-6/12 mx-auto' action="">
                <div className='flex flex-col'>
                    <input defaultValue={user.serviceName} type="text" placeholder="Type here" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <input defaultValue={user.displayName} type="text" placeholder="Type here" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <input defaultValue={user.rating} type="text" placeholder="Type here"  className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <textarea defaultValue={user.message} type="text" placeholder="Type here" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <button  className='border-2 bg-lime-50 text-bold py-2 mb-16 w-full'>Review</button>
            </form>
        </div>
    );
};

export default Update;