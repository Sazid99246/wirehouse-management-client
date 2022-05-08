import React from 'react';
import { Button } from 'react-bootstrap';

const StayWithUs = () => {
    return (
        <div className='w-50 mx-auto mb-3'>
            <h2 className='text-center'>Special Offers</h2>
            <p>We have special offers for our special customers. Want to know about our special offers? Then stay in touch with us in email.</p>
            <form>
                <div className='d-flex justify-content-center mb-3'>
                    <input className='text-center' type="email" name="" id="" placeholder='Write your email' />
                </div>
                <div className='d-flex justify-content-center'>
                    <Button>Stay Connected</Button>
                </div>
            </form>
        </div>
    );
};

export default StayWithUs;