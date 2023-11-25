import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/LogoTipo.png';
import './navbar.css'

function NavBar() {

  const links = [
    {
      id: 1,
      title: 'Inicio',
      to: '/'
    },
    {
      id: 2,
      title: 'Planes',
      to: '/plans'
    },
    {
      id: 3,
      title: 'Nosotros',
      to: '/about'
    },
    {
      id: 4,
      title: 'Contacto',
      to: '/contact'
    },
  ]

  const navRef = useRef();

  const toggleMenu = () => {
    navRef.current.classList.toggle(
      'responsive_nav'
    )
  }

  return (
    <header>

      <div className='container-navbar-img '>
        <img src={Logo} alt='logotipo' />
      </div>

      <nav ref={navRef}>
{/* lara */}
        {links.map(l => (
          <Link
            key={l.id}
            to={l.to}
            className='link'
          >{l.title}
          </Link>
        ))}
 
        <button
          className='nav-btn nav-close-btn'
          onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
      <button
        className='nav-btn '
        onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar