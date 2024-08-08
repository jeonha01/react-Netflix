import React from 'react'
import { useRecommend } from '../../hooks/useRecommend'
import { Alert } from 'bootstrap'
import MovieSlider from '../../common/MovieSlider/MovieSlider'
import { responsive } from '../../constants/responsive'

const MovieRecommend = ({ id }) => {

    const { data, isLoading, isError, error } = useRecommend(id)
    console.log(data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider title='Related Movies' movies={data.results} responsive={responsive} />
        </div>
    )
}

export default MovieRecommend