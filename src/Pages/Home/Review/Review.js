import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ singleReview }) => {
    const { name, img, review } = singleReview;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{review}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;