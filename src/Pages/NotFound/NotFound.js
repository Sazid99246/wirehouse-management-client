import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    const navigateToHome = () =>{
        navigate('/')
    }
    return (
        <div className='mt-2 d-flex flex-column align-items-center justify-content-center'>
            <p>SORRY, THE PAGE YOU ARE LOOKING IS NOT FOUND</p>
            <p style={{fontSize: "200px"}}>404</p>
            <Button onClick={navigateToHome} variant='dark' className='mb-2'>Go to Home</Button>
        </div>
    );
};

export default NotFound;