import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Alert } from 'bootstrap'
import { Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import "./Moviespage.style.css"
import Dropdown from 'react-bootstrap/Dropdown';

//경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기 
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const Moviespage = () => {
  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const keyword = query.get("q")

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }
  console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }
  return (
    <Container className='moviespage'>
      <Row className='justify-content-center'>
        <div className='d-flex dropbutton'>
          <Dropdown style={{ marginRight: '1rem' }}>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              정렬기준
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              장르별 검색
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* <Col lg={4} xs={12}>필터</Col> */}
        <Col lg={12} xs={12} className="mx-auto">
          <Row>
            {data?.results.map((movie, index) => (<Col key={index} lg={3} xs={6}>
              <MovieCard movie={movie} />
            </Col>))}
          </Row>
          <div className="d-flex justify-content-center mt-5">
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={5}
              pageCount={300} // 전체페이지가 몇개인지
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Moviespage