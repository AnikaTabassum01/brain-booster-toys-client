import React from 'react';

const AllToyDetailsCard = ({ toy }) => {

    const { toy_name, photo, price, ratings, category } = toy;

    return (

     
         <div className=" card card-side bg-base-100 shadow-xl">
            <figure><img className='pl-4' src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings}</p>
            
                <div className="card-actions justify-end">
                <button className="btn btn-xs">Details</button>
                </div>
            </div>
        </div>
      

    );
};

export default AllToyDetailsCard;