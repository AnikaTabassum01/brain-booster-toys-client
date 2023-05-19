import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import AllToyDetails from '../AllToyDetails/AllToyDetails';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <Gallery></Gallery>
            <AllToyDetails></AllToyDetails>
        </div>
    );
};

export default Home;