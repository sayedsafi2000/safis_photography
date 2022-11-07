import React from 'react';

const HeroProducts = ({ product }) => {
    const { title, price, description, rating ,img} = product;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        
                    </h2>
                    <p>{description.slice(0,100)+"..."}</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">Price :${price}</div>
                        <div className="badge badge-outline">Rating : {rating}/5</div>
                    </div>
                    <button className="btn btn-ghost">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default HeroProducts;