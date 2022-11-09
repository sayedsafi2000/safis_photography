import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Update = () => {
    useTitle("Update Review");
    const user = useLoaderData();
    const {_id} = user;
    // console.log(user)

    const handleUpdateReview = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const rating = form.rating.value;
        const obj = {
            message,
            rating
        
        }
        console.log(message,rating)

        fetch(`https://safis-photography-server.vercel.app/user-reviews/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then(res=>res.json)
        .then(data=>{
            toast.success("updated")
            console.log(data)})
        .catch(err=>console.log(err))

    }
    return (
        <div className='w-full'>
            <h2 className="text-3xl font-bold text-center my-10">Update Your Review</h2>
            <form onSubmit={handleUpdateReview} className='w-6/12 mx-auto' action="">
                <div className='flex flex-col'>
                    <input defaultValue={user.serviceName} type="text" placeholder="Service Name" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <input defaultValue={user.displayName} type="text" placeholder="User Name" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <input defaultValue={user.rating} type="text" name="rating" placeholder="Rating"  className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <div className='flex flex-col'>

                    <textarea defaultValue={user.message} name="message" type="text" placeholder="Message" className=" w-full px-4 py-2 my-2 border-2" />
                </div>
                <button type='submit'  className='border-2 bg-lime-50 text-bold py-2 mb-16 w-full'>Update Review</button>
            </form>
        </div>
    );
};

export default Update;