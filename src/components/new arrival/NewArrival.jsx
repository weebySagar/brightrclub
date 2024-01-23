import React from 'react';
import Slider from 'react-slick';


import "@styles/new-arrival/_new-arrival.scss";
import NewArrivalCard from './NewArrivalCard';
import data from "../../data/newArrival.js"
import CarouselSlider from '@components/slider/CarouselSlider';

const NewArrival = () => {

  return (
    <section className='new-arrival'>
        <div className="inner-wrap">
            <CarouselSlider>

           { data.map(item=><NewArrivalCard key={item.id} {...item}/>)}
            </CarouselSlider>
        </div>
    </section>
  )
}

export default NewArrival