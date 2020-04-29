import React from 'react'
import logo from '../images/TMDB-logo.svg'

const footerStyle = {
  position: 'absolute',
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '80px',
  height: '50px',
  backgroundImage: 'linear-gradient(90deg,rgba(144, 206, 161,0.5),rgba(1, 180, 228,0.5))'
}

const Footer = () => {

  return (
    <footer style={footerStyle}>
      <img src={logo} alt="TMDB logo" style={{ position: 'absolute', zIndex: '-1', height: '50px', width: '100%' }} />
      API work &copy; Dennnny
    </footer>
  )
}

export default Footer