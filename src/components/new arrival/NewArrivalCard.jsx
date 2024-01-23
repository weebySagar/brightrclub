import React from 'react'

import Image from "../../assets/images/img6.jfif";
import Button from '../ui/button/Button';
import Badge from '../ui/badge/Badge';
import Rating from '@components/ui/rating/Rating';

const NewArrivalCard = () => {
  return (
    <div className="new-arrival-card">
    <div className="img-wrapper">
        <img src={Image} alt="" className='img-fluid'/>
    </div>
    <div className="text-wrapper">
        <div className="badge-wrapper">
            <Badge variant='primary' text='New Arrival'/>
            <Badge variant='secondary' text='3-6 years'/>
        </div>
        <div className="title-wrapper">
            <h1 className='title'>How to Catch a Turkey - Adam Wallance</h1>
        </div>
        <div className="rating-wrapper">
            <Rating rating='4.3' reviews='1234'/>
        </div>
        <div className="description-wrapper">
            <span className='description'>All mamma wants on her special day is a little bit of peace, love, and cleanliness... Read more</span>
        </div>
        <div className="button-wrap">
            <Button text='Add to wishlist' variant='primary'/>
        </div>
    </div>
</div>
  )
}

export default NewArrivalCard