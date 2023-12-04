import React from 'react';
import './service.css';

function Services() {
    return (
        <section className='services'>
            <div className='container-services-text'>
                <h1>¿Qué ofrecemos?</h1>
                <p>En Page Creator, nos especializamos en la creación de páginas web y landing pages personalizadas para emprendedores, profesionales y negocios. Lo que ofrecemos va más allá de simples sitios en línea; brindamos soluciones digitales que potencian tu presencia en la web y generan resultados tangibles.</p>
            </div>
            <div className='container-service-containerCards'>
                <div className='container-services-card'>
                    <h2>Diseño Personalizado:</h2>
                    <p>Creamos páginas web a medida que reflejan la identidad única de tu marca, capturando la atención de tu audiencia desde el primer vistazo.</p>
                </div>
                <div className='container-services-card'>
                    <h2>Experiencia del Usuario Optimizada:</h2>
                    <p>Priorizamos la facilidad de navegación y la interactividad para garantizar que los visitantes se conviertan en clientes potenciales, y los clientes potenciales en clientes satisfechos.</p>
                </div>
                <div className='container-services-card'>
                    <h2>Adaptabilidad Responsiva:</h2>
                    <p>Nos aseguramos de que tu presencia en línea sea accesible desde cualquier dispositivo, garantizando una experiencia consistente y atractiva para todos tus visitantes.</p>
                </div>
                <div className='container-services-card'>
                    <h2>Optimización para Motores de Búsqueda (SEO):</h2>
                    <p>Implementamos prácticas de SEO para mejorar la visibilidad de tu sitio web, aumentando su clasificación en los motores de búsqueda y atrayendo tráfico relevante. </p>
                </div>
            </div>
            <div className='container-services-text'>  <h3>En Page Creator, no solo creamos páginas web; creamos soluciones digitales que impulsan tu éxito. Confía en nosotros para llevar tu presencia en línea al siguiente nivel. <br />¡Convierte visitantes en clientes y haz crecer tu negocio hoy!</h3></div>
            <div className='container-services-btn'>
                <div className='container-services-btn-plans'>
                    <button>VER PLANES</button>
                </div>
            </div>
        </section>
    )
}

export default Services