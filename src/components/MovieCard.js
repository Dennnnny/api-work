import React from 'react'
import imgSrc from '../images/image-not-found.png'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 0 10px 15px',
  width: '250px',
}

const titleStyle = {
  fontWeight: '900'
}

const imgStyle = {
  height: '330px'
}

const MovieCard = ({ id, poster, title, toggle, setCurrentMovie }) => {

  const handleClick = () => {
    setCurrentMovie(id)
    toggle()
  }

  return (
    <div style={cardStyle} className="btn" onClick={handleClick}>
      <img src={poster ? `https://image.tmdb.org/t/p/w220_and_h330_face/${poster}` : imgSrc} style={imgStyle} alt="movie poster" />
      <h5 style={titleStyle}>{title}</h5>
    </div>
  )
}

export default MovieCard