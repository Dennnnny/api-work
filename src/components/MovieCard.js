import React from 'react'
import imgSrc from '../images/image-not-found.png'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 1%;
  width: 18%;

  @media (max-width: 2000px) {
    margin: 10px 1%;
    width: 23%;
    min-width: 220px;
  }

  @media (max-width :768px) {
    margin: 10px 5%;
    width: 40%;
  }

  @media (max-width: 600px) {
    margin: 10px 25%;
    width:50%
  }

`


const CardPoster = styled.img`
  height: 500px;

  @media (max-width:2000px) {
    height: 450px;
  }

  @media (max-width:1500px) {
    height: 370px;
  }

  @media (max-width:1000px) {
    height: 300px;
  }

`



const MovieCard = ({ id, poster, title, toggle, setCurrentMovie }) => {

  const handleClick = () => {
    setCurrentMovie(id)
    toggle()
  }

  return (
    <Card className="btn" onClick={handleClick}>
      <CardPoster src={poster ? `https://image.tmdb.org/t/p/w220_and_h330_face/${poster}` : imgSrc} alt="movie poster" />
      <h5>{title}</h5>
    </Card>
  )
}

export default MovieCard