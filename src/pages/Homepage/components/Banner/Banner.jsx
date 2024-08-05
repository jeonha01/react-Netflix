import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css"

const Banner = () => {

    const randomPoster = Math.floor(Math.random() * 20)

    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log(data)
    if (isLoading) {
        <h1>Loading....</h1>
    }
    if (isError) {
        <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div style={{
            backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[randomPoster].backdrop_path
                }` + ")",
        }}
            className='banner'
        >
            <div className='text-white banner-text-area'>
                <div style={{ fontSize: '3vw', fontWeight: "bold", marginBottom: "1vw" }}>{data?.results[randomPoster].title}</div>
                <p style={{ fontSize: '1.2vw' }}>{data?.results[randomPoster].overview}</p>
            </div>
        </div>
    )
}

export default Banner;