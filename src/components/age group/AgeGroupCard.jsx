import React from "react";

import "@styles/age group/_age-group-card.scss";

const AgeGroupCard = ({ img, year }) => {
  console.log(year[0]);
  return (
    <div className="age-group-card">
      <div className="img-wrapper">
        <img src={img} alt="baby" />
      </div>

      {
        year &&
        <div className="year-wrapper">
        {year.map((y) => (
          <div className="year">
            <h1 className="heading">{y}</h1>
            <p className="title">years</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default AgeGroupCard;
