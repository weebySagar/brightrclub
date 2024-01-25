import React from "react";

import "@styles/age group/_age-group-card.scss";

const AgeGroupCard = ({ img, year }) => {
  return (
    <div className="age-group-card">
      <div className="img-wrapper">
        <img src={img} alt="baby" />
      </div>

      {
        year &&
        <div className="year-wrapper">
        {year.map((y,index) => (
          <div className="year" key={index}>
            <h1 className="heading">{y}</h1>
            <p className="title">years</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default AgeGroupCard;
