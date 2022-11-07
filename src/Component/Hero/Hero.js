import React, { useEffect, useState } from 'react';
import HeroProducts from './HeroProducts';

const Hero = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services-limit')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='w-full'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-6/12 grid grid-cols-3 gap-4'>
                        <img className='h-[220px] w-[200px]' src="hero/a.jpg" alt="" />
                        <img className='h-[220px] w-[200px]' src="hero/b.jpg" alt="" />
                        <img className='h-[220px] w-[200px]' src="hero/c.jpg" alt="" />
                        <img className='h-[220px] w-[200px]' src="hero/d.jpg" alt="" />
                        <img className='h-[220px] w-[200px]' src="hero/e.jpg" alt="" />
                        <img className='h-[220px] w-[200px]' src="hero/f.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Hey Buddy!</h1>
                        <p className="py-6 w-6/12">I'm Sayed Safi.</p>
                        <p className="py-6 ">I am a professional photographer.I provide wedding photography,wild photography,Travle Photography and many more...</p>
                        <button className="px-5 py-3 text-lg font-bold btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='w-10/12 mt-10 grid grid-cols-3 gap-5 mx-auto'>
                    {
                        products.map(product => <HeroProducts
                            key={product._id}
                            product={product}
                        ></HeroProducts>)
                    }
                </div>
                <div>
                    <button className='px-10 py-3 btn-primary my-5 w-4/12'>See All Services</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;