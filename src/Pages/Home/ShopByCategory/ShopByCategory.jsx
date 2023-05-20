import React, { useEffect, useState } from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {

        const [toys, setToy] = useState([]);

        useEffect( () => {
            fetch('toyDetails.json')
                .then(res => res.json())
                .then(data => setToy(data));
        }, [])

    return (
        <div>
            <div>
            <h2 className='text-5xl font-bold text-orange-700 text-center
            py-8'>All Brain Booster Toys...</h2>
        </div>
        <p>toys: {toys.length}</p>

            <div className='grid lg:grid-cols-3 gap-4 mx-12'>
            {
              toys.map(toy => <ShopByCategoryCard 
              key={toy.id}
              toy={toy}
              ></ShopByCategoryCard> ) 
            }
            </div>
        </div>
    );
};

export default ShopByCategory;