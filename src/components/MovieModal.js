import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import useMovieApi from '../helper/useMovieApi'
import useYoutubeApi from '../helper/useYoutubeApi'
import ModalContent from './ModalContent'
import ModalTrailer from './ModalTrailer'
import styled from 'styled-components'



const MyModal = styled(Modal)`
  position: relative;
  max-width: 50%;
  min-width: 750px;
  font-family: Microsoft JhengHei;
  margin-top:10%;

  @media (max-width:2000px){
    margin-top:5%;
  }

  @media (max-width:1500px){
    margin-top:2%;
  }


`

const MyModalHeader = styled(ModalHeader)`
  width: 100%;
  border: none;
  position: absolute;
  top: 0;

  .close{
    right: 10px;
  }

  .back{
    left: 10px;
  }
`

const MyModalBody = styled(ModalBody)`
  display: flex;
  justify-content: center;
  height: 600px;
  padding: 0
`

const Button = styled.button`
  position: absolute;
  top: 10px;
  z-index: 100;
  border: none;
  background: none;
  outline: none;

`

const Title = styled.span`
  margin-left: 75%;
  top: 10px;
  position: absolute;
  text-align: center
`



const MovieModal = ({ toggle, modal, currentMovie }) => {

  const { movies } = useMovieApi(`${currentMovie === null ? '' : `https://api.themoviedb.org/3/movie/${currentMovie}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=zh-TW`}`) //en-US ; zh-TW

  const { trailers, selectedTrailer, setSelectedTrailer } = useYoutubeApi(`${movies === null ? '' : `${movies.title} movie trailer`}`)

  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)

  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggleAll = () => {
    setCloseAll(true)
    setNestedModal(!nestedModal)
  }


  return (
    <>
      {movies !== null &&
        <>
          <MyModal isOpen={modal} toggle={toggle} >
            <MyModalHeader >
              <Button className="close" onClick={toggle}>X</Button>
            </MyModalHeader>
            <MyModalBody >
              <ModalContent movies={movies} toggleNested={toggleNested} />
            </MyModalBody>
          </MyModal>
          <MyModal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <MyModalHeader >
              <Button className="back" onClick={toggleNested}>←Back</Button>
              <Title>相關影片</Title>
            </MyModalHeader>
            <MyModalBody >
              <ModalTrailer trailers={trailers} selectedTrailer={selectedTrailer} setSelectedTrailer={setSelectedTrailer} />
            </MyModalBody>

          </MyModal>
        </>
      }
    </>
  )
}

export default MovieModal