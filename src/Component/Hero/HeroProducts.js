import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const HeroProducts = ({ product }) => {
    const { _id, title, price, description, rating, img } = product;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline glass bg-yellow-400">Price :${price}</div>
                        <div className="badge badge-outline">Rating : {rating}/5</div>
                    </div>
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-ghost w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroProducts;