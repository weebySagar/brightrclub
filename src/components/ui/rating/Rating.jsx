import React from 'react';

import Logo from "@images/amazon-icon.png";
import RatingStarLogo from "@images/star.svg";
import PeopleLogo from "@images/people.svg";
import "@styles/rating/_rating.scss";

const Rating = ({rating,reviews}) => {
  return (
    <div className='rating'>
        <div className="provider-logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="rating-stars">
            <img src={RatingStarLogo} alt="rating" />
            <span className='description'>{rating}</span>
        </div>
        <div className='separator'>|</div>
        <div className="reviews">
            <img src={PeopleLogo} alt="reviews" />
            <span className='description'>{reviews}</span>
        </div>
    </div>
  )
}

export default Rating