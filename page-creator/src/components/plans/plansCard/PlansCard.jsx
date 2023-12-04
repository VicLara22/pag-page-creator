import React from 'react';
import './plansCard.css'

function PlansCard({ id, title, description }) {
  return (
    <section className='planscard'>
      <div key={id} className='container-plansCard'>
        <div className='container-plansCard-title'>
          <h1>{title}</h1>
        </div>
        <div className='container-plansCard-description'>
          <p>
            {description}
          </p>
        </div>
        <div className='container-plansCard-btn'>
          <div className='container-plansCard-btn'>
            <button>Saber mas</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansCard