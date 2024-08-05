import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMoviesSlide from './components/Banner/PopularMoviesSlide/PopularMoviesSlide'
import TopRatedMoviesSlide from './components/Banner/TopRatedMoviesSlide/TopRatedMoviesSlide'
import UpcomingMoviesSlide from './components/Banner/UpcomingMoviesSlide/UpcomingMoviesSlide'

//1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. to rated movie
//4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesSlide />
      <TopRatedMoviesSlide />
      <UpcomingMoviesSlide />
    </div>
  )
}

export default Homepage