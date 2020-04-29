import React from 'react'
import imgSrc from '../images/image-not-found.png'

const contentStyle = {
  position: 'absolute',
  top: '16px',
  left: '400px',
  color: '#0d253f',
  maxWidth: '600px',
  padding: '1.5rem',
  marginRight: 0,
  textShadow: '2px 2px 2px #eee'
}

const posterStyle = {
  position: 'absolute',
  top: '16px',
  padding: '40px 20px',
  height: '600px',
}

const backImgStyle = {
  width: '100%',
  height: '600px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 20%',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  opacity: '0.3'
}

const ModalContent = ({ movies, toggleNested }) => {

  return (
    <>
      <div style={movies !== undefined && {
        ...backImgStyle,
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movies.backdrop_path})`
      }}></div>
      <img style={posterStyle} src={movies.poster_path ? `https://image.tmdb.org/t/p/w342/${movies.poster_path}` : imgSrc} />
      <div style={contentStyle}>
        <h1>{movies.title}</h1>
        <hr />
        <h5>故事大綱：</h5>
        <p>{movies.overview ? movies.overview.length > 180 ? movies.overview.slice(0, 180) + '...' : movies.overview : 'A movie that you will like to see? maybe....'}</p>
        <br />
        <p>片長 ： {movies.runtime} 分鐘</p>
        <p>上映日期： {movies.release_date}</p>
        <p>電影類型 ： {movies.genres !== undefined && movies.genres.map(gen => <span key={gen.id} className="mr-2 badge badge-pill badge-warning">{gen.name}</span>)}</p>
        <button className="btn btn-danger" onClick={toggleNested}>Youtube 找電影預告片</button>
      </div>
    </>
  )
}

export default ModalContent