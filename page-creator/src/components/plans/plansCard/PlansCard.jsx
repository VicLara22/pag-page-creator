import React from 'react'

function PlansCard({ id, title, description }) {
  return (
    <section>
      <div key={id}>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlansCard