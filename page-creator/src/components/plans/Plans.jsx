import React from 'react';
import './plans.css';
import PlansCard from './plansCard/PlansCard';
import data from '../../data/dataCard.json';


function Plans() {


    return (
        <section className='plans'>
            <div className='container-plans'>
                <div className='container-plans-title'>
                    <h1>Planes de Desarrollo Web</h1>
                </div>
                <div className='container-plans-subtitle'>
                    <h2>Selecciona la opción que mejor se acomode a tus metas.</h2>
                </div>
            </div>
        
            <div className='container-plans-cards'>{
                data.plans.map((d) => (
                    <PlansCard
                    key={d.id}
                    id={d.id}
                    title={d.title}
                    description={d.description} />
                ))
            }
            </div>
        </section>
    )
}

export default Plans