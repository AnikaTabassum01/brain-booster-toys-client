import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryToyDetails = () => {

    const toyDetails = useLoaderData();
    const {toy_name, price, ratings, photo} = toyDetails;

    console.log(toyDetails)

    return (
        <div>
            <h2>Category Toy Details: {ratings}</h2>
           
        </div>
    );
};

export default CategoryToyDetails;