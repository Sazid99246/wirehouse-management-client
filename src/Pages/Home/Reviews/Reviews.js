import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-island-13153.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-4'>
            <h3 className='text-center'>What Our Customers says</h3>
            <Container>
                <Row sm={1} lg={3} className='g-4'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            singleReview={review}></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;