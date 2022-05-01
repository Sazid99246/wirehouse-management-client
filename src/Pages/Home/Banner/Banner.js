import React from 'react';
import { Container } from 'react-bootstrap';
import Banner1 from '../../../images/banner-img-1.png'
const Banner = () => {
    return (
        <Container className='d-lg-flex align-items-center justify-content-between'>
            <div>
                <h3>The best PC Dealer in Bangladesh</h3>
                <p>We are the most trusted pc dealer in Bangladesh. We have been trusted by people for many years. We have Desktops and laptops from the best brands in the world.</p>
            </div>
            <img className='img-fluid' src={Banner1} alt=""/>
        </Container>
    );
};

export default Banner;