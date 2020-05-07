import React, { useState, useEffect } from 'react'
import { Jumbotron, Input } from 'reactstrap'
import styled from 'styled-components'

const JumboHeader = styled(Jumbotron)`
  background-image: linear-gradient(90deg,#90cea1,#01b4e4);
  display: flex;
  flex-direction: column;
`


const Form = styled.form`
  display: flex;
  width: 50%;
  margin: 0 auto;
  position: relative
`


const Title = styled.h1`
  text-decoration: none;
  color: #0d253f;
  width: 200px;
  text-shadow: 5px 5px 2px #01b4e4;
  font-family: Noto Sans TC;
  font-size: 100px;
  
  @media (max-width:2000px ) {
    font-size: 80px;
  }
`

const SearchButton = styled.button`
  width: 70px;
  height: 100%;
  color: #0d253f;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  line-height: 200%;
  border-left: 3px solid #01b4e4
`

const Header = ({ url, setUrl, setMode, currentPage }) => {

  const [query, setQuery] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=zh-TW&query=${query}&page=1`)
      setMode('SEARCH')
    } else {
      setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=zh-TW&page=1`)
      setMode('HOT')
    }
  }

  useEffect(() => {
    if (query !== '') {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=zh-TW&query=${query}&page=${currentPage}`)
    }
  }, [currentPage])

  return (
    <div>
      <JumboHeader>
        <Title><a href="/">搜搜</a></Title>
        <p className="lead">可以...找找電影</p>
        <Form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}>
          <Input id="searchBar" placeholder="今天要看什麼電影...？" onChange={(e) => setQuery(e.target.value)} />
          <SearchButton type="submit">搜尋</SearchButton>
        </Form>

      </JumboHeader>
    </div>
  )
}

export default Header