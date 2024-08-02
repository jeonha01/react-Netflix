import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMoviesSlide from './components/Banner/PopularMoviesSlide/PopularMoviesSlide'

//1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. to rated movie
//4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesSlide />
    </div>
  )
}

export default Homepage