import React from "react";

import "@styles/books card/_books-card.scss";
import Rating from "../rating/Rating";
import Button from "../button/Button";
import Img1 from "@images/img1.jfif";

const BooksCard = ({showNumber = false,id, img, title, rating, reviews }) => {
  return (
    <div className="books-card d-flex align-items-center justify-content-md-start justify-content-center">
        {showNumber &&
            <div className="number-wrapper">
            <span>{id}</span>
        </div>}
      <div className="books-card-wrapper">
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="title-wrapper">
          <h1 className="title">{title}</h1>
        </div>
        <div className="rating-wrapper">
          <Rating rating={rating} reviews={reviews} />
        </div>
        <div className="btn-wrapper">
          <Button variant="primary" text="Add to wishlist" />
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
