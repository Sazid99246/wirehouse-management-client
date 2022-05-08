import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Products from './Products/Products';

const Inventory = () => {
    const navigate = useNavigate();
    const navigateToAddItems = () =>{
        navigate('/additem')
    }
    return (
        <div>
            <h2 className='text-center'>Choose your favourite products</h2>
            <Products />
            <div className='text-center'>
                <Button className='mb-2' onClick={navigateToAddItems}>Add items</Button>
            </div>
        </div>
    );
};

export default Inventory;