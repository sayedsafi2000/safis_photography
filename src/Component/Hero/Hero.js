import React, { useEffect, useState } from 'react';
import HeroProducts from './HeroProducts';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';
import toast from 'react-hot-toast';
const Hero = () => {
    const [products, setProduct] = useState([]);
    useTitle("Home")
    useEffect(() => {
        fetch('https://safis-photography-server.vercel.app/services-limit')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const sentMessage =()=>{
        toast.success("Sent Message Successfully,We will contact with you soon")

    }

    return (
        <div className='w-full'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className='w-full lg:w-6/12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <PhotoProvider>
                            <PhotoView src='hero/a.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/a.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src='hero/b.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/b.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src='hero/c.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/c.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src='hero/d.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/d.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src='hero/e.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/e.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src='hero/f.jpg'>
                                <img className='h-[300px] lg:h-[220px] w-10/12 lg:w-[200px] mx-auto' src="hero/f.jpg" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className='w-full lg:w-6/12'>
                        <h1 className="text-5xl font-bold header">Hey Buddy!</h1>
                        <p className="py-6 w-6/12">I'm Sayed Safi.</p>
                        <p className="py-6 ">I am a professional photographer.I provide wedding photography,wild photography,Travel Photography and many more...</p>
                        <button className="px-5 py-3 text-lg text-white font-bold btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='w-10/12 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto'>
                    {
                        products.map(product => <HeroProducts
                            key={product._id}
                            product={product}
                        ></HeroProducts>)
                    }
                </div>
                <div>
                    <Link to={`/services`}>
                        <button className='px-10 py-3 btn-primary my-10 w-8/12 lg:w-4/12 text-white font-bold'>See All Services</button>
                    </Link>
                </div>
                <div className='my-5 w-full '>
                    <div className="stats shadow-lg w-full lg:w-8/12 mx-auto border-yellow-500">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Photography</div>
                            <div className="stat-value text-primary">12.5k</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Total Hire</div>
                            <div className="stat-value text-secondary">1.3k</div>

                        </div>

                        <div className="stat">
                            <div className="stat-value">96%</div>
                            <div className="stat-title">Happy Client</div>
                            <div className="stat-desc text-secondary">3 Order Panding</div>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto lg:flex justify-between my-10 items-center'>
                    <div className="carousel w-full lg:w-7/12 h-[400px] mx-0 lg:mx-5 rounded-md">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img alt="hero" src="bannerBottom/a.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img alt="hero" src="bannerBottom/c.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img alt="hero" src="bannerBottom/i.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img alt="hero" src="bannerBottom/g.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img alt="hero" src="bannerBottom/d.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-7/12  rounded-lg py-5'>
                        <div>
                            <h1 className="text-5xl font-bold header">Captured Photo <br /> Overview!</h1>
                            <p className="py-6 ">Here is some captured photo taken by me...</p>
                            <h2 className="text-2xl text-yellow-600 font-bold mb-5">To Contact with me?</h2>
                            <button className="px-5 mb-10 py-3 text-lg text-white font-bold btn-primary">Click here</button>
                        </div>
                    </div>
                </div>
                <form  className='w-8/12 mx-auto'>
                    <label for="message" class="block  text-2xl my-10 font-bold text-gray-900 dark:text-gray-400 header ">Have any question?? <br /> Sent me a message</label>
                    <div className='flex flex-col lg:flex-row'>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                               Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="example@confushion.com" />

                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Full Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Please enter your name" />
                        </div>

                    </div>

                    <textarea  id="message" rows="4" class="block p-2.5 mb-10 mt-5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a message..."></textarea>
                    <Link onClick={sentMessage}   className="btn-primary p-3 text-white font-bold mb-10" type='submit'>Sent Message</Link>
                </form>
            </div>
        </div>
    );
};

export default Hero;