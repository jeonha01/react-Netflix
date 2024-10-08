import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    const { data: genreData } = useMovieGenreQuery()

    const showGenre = (genreIDList) => {
        if (!genreData) return []
        const genreNameList = genreIDList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id)
            return genreObj.name
        })

        return genreNameList
    }

    const navigate = useNavigate()

    const goToDetail = () => {
        navigate(`/movies/${movie.id}`)
    }

    return (
        <div onClick={goToDetail} style={{ backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` + ")" }}
            className='movie-card'
        >
            <div className='overlay'>
                <h3 style={{ marginBottom: "20px", fontWeight: 'bold' }}>{movie.title}</h3>
                <div className='d-flex movie-banner'>
                    <div style={{ color: "lime" }}><img className='avg-icon' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJC4xJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3NTU3Nzc1Nzc3Nzc3Nzc1LTUyKzUwNTU3Nzc3NTUxLS04Ny00NTU1NTgtNTU3Nv/AABEIABwAHAMBEQACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABgQFAQMH/8QAJBAAAgEDAwQDAQAAAAAAAAAAAQIDAAQRBQYxEhMhQUNRkSL/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQIDBAUHBv/EACYRAAIBAwIFBQEAAAAAAAAAAAABEQIDBDFRBRIhodETImHB4RX/2gAMAwEAAhEDEQA/AHmuaG+FAgUAFJICpvnWb7SXshYTCPuwXjvlFbJjgZ05HpgDWzwrFtZCr9RTDXdlbIuVURyik28txiC6Z7gRvb2eCe0nmcSxBmHjjpkFar4ZiSmlq+0PwVlkXCyj3hqtlOWumF5DbPfLKuFjaRYmUKcgcjJ4xmq9XDLFxNULlb5Y+JkesipPq51OiIwdFceAwB815yqmKmti+uqkh6npFhqpjN/AJe2sip/TDAdSrcH2CRU1jKvY8q24n6GVW6a9SLPtfRZ0dJbFWV1KsO4wyCUJ9/caflSriWVTHu0/fI12LexrfaWhPCsTWOUXr+V8nrILZOcnOBzTv6eUnPN22E9C3sXYAAAAwAMAVQbbcsm06IzQAUAFABQB/9k=' alt='avg' /> {movie.vote_average}</div>
                    {/* <div>{movie.popularity}</div> */}
                    <div className='adulticon'>{movie.adult ? <img className='adultimg' src='data:image/jpeg;base64,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' alt='over18' /> : <img className='adultimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6JZ_SkR3nyjr2Z9b5Jw8DH-1ch73tVazXA&s' alt='under18' />}</div>
                </div>
                {showGenre(movie.genre_ids).map((id) => (<Badge className='genre' bg="link">{id}</Badge>))}
            </div>
        </div>
    )
}

export default MovieCard

