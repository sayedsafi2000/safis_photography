import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, price, description, rating, img } = service;
    return (
        <div>
            <div className="card w-9/12 mx-auto mb-5 border-2 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline glass bg-yellow-400">Price :${price}</div>
                        <div className="badge badge-outline">Rating : {rating}/5</div>
                    </div>
                    <button className="btn btn-ghost">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;