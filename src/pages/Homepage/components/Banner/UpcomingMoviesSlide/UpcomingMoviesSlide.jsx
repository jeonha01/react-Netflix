import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../../hooks/useUpcomingMovies'
import { Alert } from 'bootstrap'
import MovieSlider from '../../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../../constants/responsive';

const UpcomingMoviesSlide = () => {

    const { data, isLoading, isError, error } = useUpcomingMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>
    }
    return (
        <div><MovieSlider title='다가오는 영화' movies={data.results} responsive={responsive} /></div>
    )
}

export default UpcomingMoviesSlide