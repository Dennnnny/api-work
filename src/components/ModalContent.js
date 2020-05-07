import React from 'react'
import imgSrc from '../images/image-not-found.png'
import styled from 'styled-components'



const Content = styled.div`
  color: #0d253f;
  padding: 1.5rem;
  margin-right: 0;
  text-shadow: 2px 2px 2px #eee
  max-width: 600px;
`

const Poster = styled.img`
  padding: 40px 20px;
  height: 600px;
`

const Background = styled.div`
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.3;
  ${props => props.backImg ? `background-image: url(https://image.tmdb.org/t/p/w780/${props.backImg})` : ""}
  
`

const ModalContents = styled.div`
  position: absolute;
  display: flex
`

const ModalContent = ({ movies, toggleNested }) => {

  return (
    <>
      <Background backImg={movies.backdrop_path} />

      <ModalContents>
        <Poster src={movies.poster_path ? `https://image.tmdb.org/t/p/w342/${movies.poster_path}` : imgSrc} />
        <Content>
          <h1>{movies.title}</h1>
          <hr />
          <h5>故事大綱：</h5>
          <p>{movies.overview ? movies.overview.length > 150 ? movies.overview.slice(0, 150) + '...' : movies.overview : 'A movie that you will like to see? maybe....'}</p>
          <br />
          <p>片長 ： {movies.runtime} 分鐘</p>
          <p>上映日期： {movies.release_date}</p>
          <p>電影類型 ： {movies.genres !== undefined && movies.genres.map(gen => <span key={gen.id} className="mr-2 badge badge-pill badge-warning">{gen.name}</span>)}</p>
          <button className="btn btn-danger" onClick={toggleNested}>Youtube 找電影預告片</button>
        </Content>
      </ModalContents>
    </>
  )
}

export default ModalContent