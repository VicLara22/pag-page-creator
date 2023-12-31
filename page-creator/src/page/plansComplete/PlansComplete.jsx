import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import './plansComplete.css'

function PlansComplete() {
  return (
    <section>
      <NavBar />
      <div className='plansComplete'>
        <div className='title-principal-plansComplete'> 
        <h1 >Te presentamos nuestro planes para que puedas tener tu propia <br/> Landing Page o Pagina web, elegi la que mejor le quede a tu negocio</h1>
        </div>
        <div className="contenedor">
          <div className="columna1">
            <div className='container-plansComplete-title'>
              <h1>Landing Page</h1>
              <p>Una landing page tiene un objetivo principal: convertir a los visitantes en clientes. Se utiliza comúnmente en campañas de marketing y publicidad. La landing page se centra en una oferta específica, producto o acción que se desea que el visitante realice, como completar un formulario, comprar un producto, etc. Suele tener un diseño simple y directo, con un llamado a la acción (CTA) claro. El contenido y diseño de la landing page están optimizados para lograr altas tasas de conversión. </p>
            </div>
            <div className='container-plansComplete-lista'>
              <h3>Características </h3>
              <ul>
                <li>Formulario de contacto para facilitar la interacción con tus visitantes.</li>
                <li>Enlaces a tus redes sociales para una mayor presencia en línea.</li>
                <li>Botón de WhatsApp para una comunicación directa</li>
                <li>Optimización para Google, mejorando la visibilidad en los motores de búsqueda.</li>
                <li>Hosting para garantizar un rendimiento eficiente.</li>
                <li>Diseño responsive, asegurando una experiencia óptima en diferentes dispositivos.</li>
                <br/>
                <br/>

              </ul>
            </div>
            <div className="contenedor-precio">
              <div className="columna1-precio">
                <div className='container-plansComplete-containers'>
                  <h2>Precio $60.000</h2>
                </div>
              </div>
              <div className="columna2-precio">
                <div className='container-plansComplete-containers'>
                  <h2>Abono mensual $6.000</h2>
                </div>
              </div>
              <p>CONTRATACION DE DOMINIO POR UN ANO </p>
              <button>CONTACTAR</button>
            </div>
          </div>
          <div className="columna2">
            <div className='container-plansComplete-title'>
              <h1>Pagina Web</h1>
              <p>Una página web es un documento digital que forma parte de un sitio web. Puede contener varios elementos, como texto, imágenes, videos, enlaces y más. Las páginas web son la unidad básica de contenido en un sitio web y están interconectadas a través de enlaces. Pueden tener múltiples propósitos, como proporcionar información, presentar productos o servicios, entretener, etc. Las páginas web pueden tener diferentes secciones y navegación para explorar contenido. </p>

            </div>
            <div className='container-plansComplete-lista'>
              <h3>Características</h3>
              <ul>
                <li>Hasta 4 paginas internas</li>
                <li>Implementación de un buscador de productos</li>
                <li>Formulario de contacto para facilitar la interacción con tus visitantes.</li>
                <li>Enlaces a tus redes sociales para una mayor presencia en línea.</li>
                <li>Botón de WhatsApp para una comunicación directa</li>
                <li>Optimización para Google, mejorando la visibilidad en los motores de búsqueda.</li>
                <li>Hosting para garantizar un rendimiento eficiente.</li>
                <li>Diseño responsive, asegurando una experiencia óptima en diferentes dispositivos.</li>
              </ul>
            </div>
            <div className="contenedor-precio">
              <div className="columna1-precio">
                <div className='container-plansComplete-containers'>
                  <h2>Precio $95.000</h2>
                </div>
              </div>
              <div className="columna2-precio">
                <div className='container-plansComplete-containers'>
                  <h2>Abono mensual $7.000</h2>
                </div>
              </div>
              <p>CONTRATACION DE DOMINIO POR UN ANO</p>
              <button>CONTACTAR</button>
            </div>
          </div>
        </div>
        <div className='container-plansComplete-abono'>
          <h1>¿Que incluye el abono mensual?</h1>
          <div className='container-plansComplete-abono-ul'>
          <ul>
            <li>Hosting: Alojamiento para tu página web, manteniéndola activa las 24 horas, los 7 días de la semana.</li>
            <li>Mantenimiento: Incluye la actualización periódica de la página para asegurar un rendimiento óptimo.</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansComplete 