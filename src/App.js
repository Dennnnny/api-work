import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './helper/HomePage'
import Footer from './components/Footer'

const AppStyle = {
  fontFamily: 'Microsoft JhengHei',
  position: 'relative',
  minWidth: '900px'
}



const App = () => {

  return (
    <div style={AppStyle}>

      <HomePage />

      <Footer />
    </div>
  )
}

export default App