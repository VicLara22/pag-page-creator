import React from 'react';
import img from '../../assets/banner.png';
import './presentation.css';

function Presentation() {
  return (
    <section className='presentation'>
      <div className='container-banner'>
        <div className='container-presentation-text'>
          <h1>Crea tu</h1><h2>identidad online.</h2>
          <h3>Craemos sitios webs totalmente personalizados</h3>
          <h4>que se adaptan a tus necesidades.</h4>
          <div className='container-presentation-btn'>

            <div className='container-presentation-btn-CTA'>
              <button>¡QUIERO MI SITIO WEB AHORA!</button>
            </div>
            <div className='container-presentation-btn-plans'>
              <button>VER PLANES</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation 