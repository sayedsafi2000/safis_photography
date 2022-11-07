import React from 'react';

const Hero = () => {
    return (
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
    );
};

export default Hero;