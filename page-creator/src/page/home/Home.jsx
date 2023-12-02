import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Presentation from '../../components/presentation/Presentation'
import Plans from '../../components/plans/Plans'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <NavBar/>
      <Presentation/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Home