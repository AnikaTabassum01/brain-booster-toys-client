import React, { useEffect, useState } from 'react';
import AllToyDetailsCard from './AllToyDetailsCard';

const AllToyDetails = () => {

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
              toys.map(toy => <AllToyDetailsCard
              key={toy.id}
              toy={toy}
              ></AllToyDetailsCard> ) 
            }
            </div>
        </div>
    );
};

export default AllToyDetails;