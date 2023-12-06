import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


function Footer() {

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


  return (
    <footer >
      <div className='containerText'>
        <div className="container-secciones">
          {
            links.map((t) => (
              <Link
                className="container-title-secciones "
                to={t.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
                key={t.id}>
                {t.title}
              </Link>
            )
            )
          }
        </div>
      </div>
      <div className='containerText'>
        <div className="redes-sociales-icon">
          <Link hrefLang=''> 
          <BsInstagram className='instagram' />
          </Link>
        </div>

        <div className='whatsapp'>
          <a
            target="_blanck"
            href="https://api.whatsapp.com/send?phone=54113338193"
          >
            <BsWhatsapp className='icon' />
          </a>
        </div>

        <p className='msj'>Envianos un mensaje</p>
      </div>
      <h1 className='h1'>© Todos los derechos reservados</h1>

    </footer>
  )
}

export default Footer 