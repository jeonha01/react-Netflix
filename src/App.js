import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import Moviespage from './pages/Movies/Moviespage';
import MovieDetailpage from './pages/MovieDetail/MovieDetailpage';
import NotFoundpage from './pages/NotFoundpage/NotFoundpage';
import 'bootstrap/dist/css/bootstrap.min.css';


// 홈페이지  주소: /
// 영화 전체 보여주는 페이지(서치)  주소: /movies
// 영화 디테일 페이지  주소: /movies/:id
// 추천 영화 /movies/:id/recommandation
// 리뷰 /movies/:id/reviews

// 꾸밀때 참고
// 서치박스 숨겼다가 아이콘 누르면 보여주기

function App() {
  return (


    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies'>
          <Route index element={<Moviespage />} />
          <Route path=':id' element={<MovieDetailpage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundpage />} />
    </Routes>
  );
}


export default App;
