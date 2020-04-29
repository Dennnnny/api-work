import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Paginations from '../components/Pagination'
import useMovieApi from './useMovieApi'


const HomePage = () => {
  const [mode, setMode] = useState('HOT')
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=083b9cd3ac7a079d5f0dd191afa9cc9e&language=zh-TW&page=1`) //en-US ; zh-TW
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const { movies, totalResults, totalPages, currentPage, setCurrentPage } = useMovieApi(url)

  // useEffect(() => {
  // }, [movies])

  return (
    <>
      <Header url={url} setUrl={setUrl} mode={mode} setMode={setMode} currentPage={currentPage} />
      <Body movies={movies} mode={mode} totalResults={totalResults} totalPages={totalPages} currentPage={currentPage} toggle={toggle} modal={modal} />
      {mode === 'SEARCH' && <Paginations totalPages={totalPages} setUrl={setUrl} currentPage={currentPage} setCurrentPage={setCurrentPage} />}

    </>
  )
}

export default HomePage