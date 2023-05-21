import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import ShopByAge from '../ShopByAge/ShopByAge';
import OurBlog from '../../OurBlog/OurBlog';
import useTitle from '../../../Hook/UseTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ShopByAge></ShopByAge>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;