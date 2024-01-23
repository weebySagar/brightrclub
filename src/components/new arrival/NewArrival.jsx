import React from 'react';

import "../../assets/styles/new-arrival/_new-arrival.scss"
import NewArrivalCard from './NewArrivalCard';

const NewArrival = () => {
  return (
    <section className='new-arrival'>
        <div className="inner-wrap d-flex">
            <NewArrivalCard/>
            <NewArrivalCard/>

        </div>
    </section>
  )
}

export default NewArrival