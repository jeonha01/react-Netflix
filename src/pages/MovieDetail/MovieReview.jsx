import React from 'react'
import { useReviewQuery } from '../../hooks/useReview';
import Alert from 'react-bootstrap/Alert';

const MovieReview = ({ id }) => {

    const { data, isLoading, isError, error } = useReviewQuery(id)
    console.log(data)

    if (isLoading) {
        <h1>Loading....</h1>
    }
    if (isError) {
        <Alert variant='danger'>{error.message}</Alert>
    }

    return (
        <div>
            <h1>Reviews</h1>
            {data?.results.map((review) => (
                <div>
                    <h4 style={{fontWeight:'bold'}}>{review.author}</h4>
                    <div>{review.content}</div>
                </div>))}
        </div>
    )
}

export default MovieReview