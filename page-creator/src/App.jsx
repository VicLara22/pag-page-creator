import React from 'react'
import Home from './page/home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './page/about/About'
import PlansComplete from './page/plansComplete/PlansComplete'
import Contact from './page/contact/Contact'

function App() {

  return (
    <>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/plans' element={<PlansComplete />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />

        </Routes>
    </>
  )
}

export default App
