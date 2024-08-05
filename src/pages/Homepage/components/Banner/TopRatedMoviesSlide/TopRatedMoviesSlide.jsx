import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../../hooks/useTopRatedMovies'
import { Alert } from 'bootstrap'
import MovieSlider from '../../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../../constants/responsive';

const TopRatedMoviesSlide = () => {

    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }
    return (
        <div><MovieSlider title='최고 평점 영화' movies={data.results} responsive={responsive} /></div>
    )
}

export default TopRatedMoviesSlide