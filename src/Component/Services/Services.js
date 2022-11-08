import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import FadeLoader from "react-spinners/ClipLoader";
import useTitle from '../../Hooks/useTitle';
const Services = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
        setIsLoading(false);
    }, [])
    useTitle("Services")
    if (isLoading) {
        return <div className='w-full h-full mx-auto'>
            <FadeLoader color="#36d7b7"
                height={63}
                margin={9}
                speedMultiplier={1}
                width={36} />
        </div>
    }
    return (
        <div className='w-9/12 mx-auto'>
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