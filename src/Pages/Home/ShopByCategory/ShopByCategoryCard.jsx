import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategoryCard = ({ toy }) => {

    const { _id, toy_name, photo, price, ratings, category } = toy;

    return (

     
         <div className=" card card-side bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration="3000">
            <figure><img className='pl-4' src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings}</p>
            
                <div className="card-actions justify-end">
               
                <Link to={`/categoryToyDetails/${_id}`}> <button className="btn btn-xs">Details</button></Link>

                </div>
            </div>
        </div>
      

    );
};

export default ShopByCategoryCard ;