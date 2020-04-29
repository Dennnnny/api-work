import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Spinner } from 'reactstrap'
import MovieModal from './MovieModal'

const bodyStyle = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}

const titleStyle = {
  width: '20%',
  margin: '30px auto',
  textAlign: 'center',
  borderBottom: '3px solid #01b4e4'
}

const searchStyle = {
  position: 'relative'
}

const searchTextStyle = {
  position: 'absolute',
  display: 'inline-block',
  top: '20px',
  margin: 'auto ',
  right: '10%',
}

const spinnerStyle = {
  color: '#90cea1',
  margin: '100px auto',
  width: '10rem',
  height: '10rem'
}

const Body = ({ movies, mode, totalResults, totalPages, currentPage, toggle, modal }) => {

  const [currentMovie, setCurrentMovie] = useState(null)

  return (
    <>
      {mode === "HOT" ?
        <div >
          <h1 style={titleStyle}>熱門電影</h1>
        </div>
        :
        movies === null ? '...'
          :
          <div style={searchStyle}>
            <h1 style={titleStyle}>搜尋結果</h1>
            <div style={searchTextStyle}>
              <p >總筆數：{totalResults} 筆  |  第{currentPage} 頁 / {totalPages} 頁</p>
            </div>
          </div>
      }
      <div style={bodyStyle}>
        {movies !== null ? movies.map(movie => { return <MovieCard toggle={toggle} key={movie.id} poster={movie.poster_path} title={movie.title} setCurrentMovie={setCurrentMovie} id={movie.id} /> }) : <Spinner style={spinnerStyle} />}
      </div>
      <MovieModal toggle={toggle} modal={modal} currentMovie={currentMovie} />
    </>
  )
}

export default Body