import React, { useEffect, useState } from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {

    const [toys, setToy] = useState([]);

    useEffect(() => {
        fetch('https://brain-booster-toy-server-anikatabassum01.vercel.app/categoryToy')
            .then(res => res.json())
            .then(data => setToy(data));
    }, [])

    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-5xl font-bold text-orange-700 text-center
            py-8'>All Brain Booster Toys...</h2>
            </div>

            <div className="tabs font-bold mx-96 pl-4 pt-6">
                <a className="tab tab-lg tab-lifted">Science Kits</a>
                <a className="tab tab-lg tab-lifted tab-active">Motor Skills</a>
                <a className="tab tab-lg tab-lifted">Math Learning</a>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 mx-12'>
                {
                    toys.map(toy => <ShopByCategoryCard
                        key={toy.id}
                        toy={toy}
                    ></ShopByCategoryCard>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;