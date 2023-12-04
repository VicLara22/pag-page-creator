import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Presentation from '../../components/presentation/Presentation'
import Plans from '../../components/plans/Plans'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import Services from '../../components/services/Services'

function Home() {
  return (
    <div>
      <NavBar/>
      <Presentation/>
      <Services/>
      <Plans/>
    </div>
  )
}

export default Home