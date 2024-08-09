import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import "./MovieBanner.style.css"
import MovieTrailer from '../Homepage/components/Banner/MovieTrailer';

const MovieBanner = ({id}) => {
    
    const { data, isLoading, isError, error } = useMovieDetailQuery(id)
    console.log(data)

    if (isLoading) {
        <h1>Loading....</h1>
    }
    if (isError) {
        <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div><div style={{
            backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data?.backdrop_path
                }` + ")",
        }}
            className='banner'
        >
            <div className='text-white banner-text-area'>
                <div style={{ fontSize: '3vw', fontWeight: "bold", marginBottom: "1vw" }}>{data?.title}</div>
                <p style={{ fontSize: '1.2vw' }}>{data?.overview}</p>
                <MovieTrailer id={id} />
            </div>

        </div></div>
    )
}

export default MovieBanner