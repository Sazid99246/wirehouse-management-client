import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryProduct from '../InventoryProduct/InventoryProduct';

const InventoryProducts = () => {
    const [products, setProducts] = useState([]);
    const sixProducts = products.slice(0, 6);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://desolate-island-13153.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <h3 className='text-center'>Inventory</h3>
            <Row lg={3} sm={1} className="g-4">
                {
                    sixProducts.map(product => <InventoryProduct
                        product={product}
                        key="_id"></InventoryProduct>)
                }
            </Row>
            <div className='text-center'>
                <Button onClick={()=>navigate('/inventory')} className='mx-auto my-3' variant='outline-primary'>Manage Inventories</Button>
            </div>
        </Container>
    );
};

export default InventoryProducts;