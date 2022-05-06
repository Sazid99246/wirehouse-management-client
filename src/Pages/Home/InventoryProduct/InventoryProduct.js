import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryProduct = ({ product }) => {
    const {_id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Details: {description}</Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                        <Card.Text>Supplier: {supplier}</Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                        <Button onClick={()=>navigateToProductDetail(_id)} variant='primary'>Update</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default InventoryProduct;