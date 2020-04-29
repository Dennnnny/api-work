import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import useMovieApi from '../helper/useMovieApi'
import useYoutubeApi from '../helper/useYoutubeApi'
import ModalContent from './ModalContent'
import ModalTrailer from './ModalTrailer'

const modalStyle = {
  position: 'relative',
  maxWidth: '75%',
  minWidth: '750px',
  fontFamily: 'Microsoft JhengHei',
}

const headerStyle = {
  width: '100%',
  border: 'none',
  position: 'absolute',
  top: 0
}

const bodyStyle = {
  display: 'flex',
  height: '600px',
  padding: 0
}

const closeButton = {
  position: 'absolute',
  right: '10px',
  top: '5px',
  zIndex: '100',
  border: 'none',
  background: 'none',
  outline: 'none'
}

const backButton = {
  position: 'absolute',
  left: '10px',
  top: '5px',
  zIndex: '100',
  border: 'none',
  background: 'none',
  outline: 'none'
}

const titleStyle = {
  marginLeft: '75%',
  top: '5px',
  position: 'absolute',
  textAlign: 'center'
}




const MovieModal = ({ toggle, modal, currentMovie }) => {

  const { movies } = useMovieApi(`${currentMovie === null ? '' : `https://api.themoviedb.org/3/movie/${currentMovie}?api_key=083b9cd3ac7a079d5f0dd191afa9cc9e&language=zh-TW`}`) //en-US ; zh-TW

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
          <Modal style={modalStyle} isOpen={modal} toggle={toggle} >
            <ModalHeader style={headerStyle}>
              <button style={closeButton} onClick={toggle}>X</button>
            </ModalHeader>
            <ModalBody style={bodyStyle}>
              <ModalContent movies={movies} toggleNested={toggleNested} />
            </ModalBody>
          </Modal>
          <Modal style={modalStyle} isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader style={headerStyle}>
              <button style={backButton} onClick={toggleNested}>←Back</button>
              <span style={titleStyle}>相關影片</span>
            </ModalHeader>
            <ModalBody style={bodyStyle}>
              <ModalTrailer trailers={trailers} selectedTrailer={selectedTrailer} setSelectedTrailer={setSelectedTrailer} />
            </ModalBody>

          </Modal>
        </>
      }
    </>
  )
}

export default MovieModal