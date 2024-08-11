import React from 'react'
import { useReviewQuery } from '../../hooks/useReview';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

const MovieReview = ({ id }) => {

    const { data, isLoading, isError, error } = useReviewQuery(id)
    const [expandedReviewId, setExpandedReviewId] = useState(null) // 확장된 리뷰 ID를 관리

    const handleToggle = (reviewId) => {
        // 클릭 시 리뷰가 확장되거나 축소되도록 상태 업데이트
        setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId)
    }
    console.log(data)

    if (isLoading) {
        <h1>Loading....</h1>
    }
    if (isError) {
        <Alert variant='danger'>{error.message}</Alert>
    }

    // 여기서 data가 undefined일 수 있기 때문에 조건부로 처리
    if (!data || !data.results) {
        return <p>No reviews available.</p>
    }

    return (
        <div>
            {data.results?.map((review) => {
                const isExpanded = expandedReviewId === review.id
                const shortText = review.content.slice(0, 100) // 첫 100자만 표시

                return (
                    <div key={review.id} style={{ marginBottom: '20px' }}>
                        <h5>{review.author}</h5>
                        <p>
                            {isExpanded ? review.content : shortText}
                            {review.content.length > 100 && (
                                <span
                                    onClick={() => handleToggle(review.id)}
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                >
                                    {isExpanded ? ' 접기' : ' 더보기'}
                                </span>
                            )}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReview