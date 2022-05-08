import React from 'react';
import Banner from '../Banner/Banner';
import InventoryProducts from '../InventoryProducts/InventoryProducts';
import Reviews from '../Reviews/Reviews';
import StayWithUs from '../StayWithUs/StayWithUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InventoryProducts/>
            <Reviews/>
            <StayWithUs/>
        </div>
    );
};

export default Home;