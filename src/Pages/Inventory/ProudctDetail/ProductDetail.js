import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProudct] = useState({});
    const { name, image, description, price, quantity, supplier } = product;
    useEffect(() => {
        fetch(`https://desolate-island-13153.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProudct(data))
    }, [])

    return (
        <div>
            <h2 className='text-center'>Details about {name}</h2>
            <Container className='d-flex justify-content-center'>
                <Card className='mt-3 pt-3' style={{ maxWidth: "1000px" }}>
                    <Row className='g-0'>
                        <Col md={4} sm={12}>
                            <img src={image} className="img-fluid rounded-start" alt="" />
                        </Col>
                        <Col md={8} sm={12}>
                            <Card.Title>Product name: {name}</Card.Title>
                            <Card.Text>Description: {description}</Card.Text>
                            <Card.Text>Price: {price}</Card.Text>
                            <Card.Text>Supplier: {supplier}</Card.Text>
                            <Card.Text>Quantity: {quantity}</Card.Text>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
};

export default ProductDetail;