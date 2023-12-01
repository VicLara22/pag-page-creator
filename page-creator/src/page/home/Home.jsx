import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Presentation from '../../components/presentation/Presentation'
import Plans from '../../components/plans/Plans'

function Home() {
  return (
    <div>
      <NavBar/>
      <Presentation/>
      <Plans/>
    </div>
  )
}

export default Home