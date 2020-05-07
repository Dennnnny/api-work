import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './helper/HomePage'
import Footer from './components/Footer'
import styled from 'styled-components'

// const AppStyle = {
//   fontFamily: 'Microsoft JhengHei',
//   position: 'relative',
//   minWidth: '900px'
// }

const AppDiv = styled.div`
  font-family: Microsoft JhengHei;
  position: relative;
  minWidth: 900px
`



const App = () => {

  return (
    <AppDiv>
      <HomePage />
      <Footer />
    </AppDiv>
  )
}

export default App