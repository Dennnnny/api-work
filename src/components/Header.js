import React, { useState, useEffect } from 'react'
import { Jumbotron, Input } from 'reactstrap';

const jumboStyle = {
  backgroundImage: 'linear-gradient(90deg,#90cea1,#01b4e4)',
  display: 'flex',
  flexDirection: 'column',
}

const inputStyle = {
  display: 'flex',
  width: '50%',
  margin: '0 auto',
  position: 'relative'
}

const titleStyle = {
  textDecoration: 'none',
  color: '#0d253f',
  width: '150px',
  textShadow: '5px 5px 2px #01b4e4'
}

const searchBarStyle = {
  width: '70px',
  height: '100%',
  color: '#0d253f',
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  right: 0,
  lineHeight: '200%',
  borderLeft: '3px solid #01b4e4'
}

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
      <Jumbotron style={jumboStyle}>
        <a href="/" style={titleStyle}>
          <h1 className="display-3">搜搜</h1>
        </a>
        <p className="lead">可以...找找電影</p>
        <form style={inputStyle} onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}>
          <Input id="searchBar" placeholder="今天要看什麼電影...？" onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" style={searchBarStyle}>搜尋</button>
        </form>

      </Jumbotron>
    </div>
  )
}

export default Header