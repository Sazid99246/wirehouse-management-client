import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryProduct = ({ product }) => {
    const { name, image, description, price, quantity, supplier } = product;
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
                        <Button variant='primary'>Update</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default InventoryProduct;