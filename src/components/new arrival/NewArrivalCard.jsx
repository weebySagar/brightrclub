import React from "react";

import Button from "../ui/button/Button";
import Badge from "../ui/badge/Badge";
import Rating from "@components/ui/rating/Rating";
import "@styles/new-arrival/_new-arrival-card.scss";

const NewArrivalCard = ({
  img,
  title,
  description,
  badge,
  ratings,
  reviews,
}) => {
  return (
    <div className="new-arrival-wrapper">
      <div className="new-arrival-card">
        <div className="img-wrapper">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="text-wrapper">
          <div className="badge-wrapper">
            <Badge variant="primary" text={badge[0]} />
            <Badge variant="secondary" text={badge[1]} />
          </div>
          <div className="title-wrapper">
            <h1 className="heading">{title}</h1>
          </div>
          <div className="rating-wrapper">
            <Rating rating={ratings} reviews={reviews} />
          </div>
          <div className="description-wrapper">
            <span className="description">{description}</span>
          </div>
          <div className="button-wrap">
            <Button text="Add to wishlist" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
