import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import BarLoader from "react-spinners/ClipLoader";
import useTitle from '../../Hooks/useTitle';
const Services = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://safis-photography-server.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data))
        setIsLoading(false);
    }, [])
    useTitle("Services")
    if (isLoading) {
        return <div className='w-full h-full mx-auto'>
            <BarLoader
            color="#36d7b7"
            height={4}
            width={1000}
        />
        </div>
    }
    return (
        <div className='w-full lg:w-9/12 mx-auto'>
            <p>{isLoading}</p>
            {
                services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                ></ServicesCard>)
            }

        </div>
    );
};

export default Services;