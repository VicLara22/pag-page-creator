import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import FormContact from '../../components/form/FormContact'
import './contact.css'

function Contact() {
  return (
    <section className='container-Contact'>
      <NavBar />
      <FormContact/>
    </section>
  )
}

export default Contact 