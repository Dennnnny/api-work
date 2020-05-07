import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Spinner } from 'reactstrap'
import MovieModal from './MovieModal'
import styled from 'styled-components'

const BodyContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap
`

const Title = styled.h1`
  width: 20%;
  margin: 30px auto;
  text-align: center;
  border-bottom: 3px solid #01b4e4;

  @media (max-width: 770px) {
    width: 35%;
  }
`

const SearchArea = styled.div`
  position: relative;
`

const SearchText = styled.div`
  position: absolute;
  display: inline-block;
  top: 20px;
  margin: auto ;
  right: 10%;
`

const Loading = styled(Spinner)`
  color: #90cea1;
  margin: 100px auto;
  width: 10rem;
  height: 10rem
`

const Body = ({ movies, mode, totalResults, totalPages, currentPage, toggle, modal }) => {

  const [currentMovie, setCurrentMovie] = useState(null)

  return (
    <>
      {mode === "HOT" ?
        <Title>熱門電影</Title>
        :
        movies === null ? '...'
          :
          <SearchArea>
            <Title>搜尋結果</Title>
            <SearchText>
              <p >總筆數：{totalResults} 筆  |  第{currentPage} 頁 / {totalPages} 頁</p>
            </SearchText>
          </SearchArea>
      }
      <BodyContent>
        {movies !== null ? movies.map(movie => { return <MovieCard toggle={toggle} key={movie.id} poster={movie.poster_path} title={movie.title} setCurrentMovie={setCurrentMovie} id={movie.id} /> }) : <Loading />}
      </BodyContent>
      <MovieModal toggle={toggle} modal={modal} currentMovie={currentMovie} />
    </>
  )
}

export default Body