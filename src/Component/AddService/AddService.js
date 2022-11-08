import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle("Add-Service")
    const handleAddtoService = event=>{
        event.preventDefault();
        const form = event.target;
        const Title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const service = {
            title:Title,
            price:price,
            img:img,
            description:description,
            rating:rating
        }
        fetch("http://localhost:5000/services",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            form.reset();
            toast.success("Service Added Successfully")
            console.log(data)})
        .catch(err=>console.log(err))
    }
    return (
        <div className="w-6/12 mx-auto">
            <form onSubmit={handleAddtoService} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title'  id="title" type="text" placeholder="title"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price'  id="price" type="text" placeholder="price"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='rating'  id="rating" type="text" placeholder="rating"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="img">
                    PhotoURL
                    </label>
                    <input name='img' className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="img" type="text" placeholder="enter photoURL"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="description">
                    Description
                    </label>
                    <textarea  name='description' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Enter Some description"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add To your Service
                    </button>
                    
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    );
};

export default AddService;