import React from 'react'
import logo from '../images/TMDB-logo.svg'
import styled from 'styled-components'

const FooterContent = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  height: 50px;
  background-image: linear-gradient(90deg,rgba(144, 206, 161,0.5),rgba(1, 180, 228,0.5))
`
const FooterImg = styled.img`
  position: absolute;
  z-index: -1; 
  height: 50px; 
  width: 100%
`

const Footer = () => {
  return (
    <FooterContent>
      <FooterImg src={logo} alt="TMDB logo" />
      API work &copy; Dennnny
    </FooterContent>
  )
}

export default Footer