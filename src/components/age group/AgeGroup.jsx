import React from "react";

import "@styles/age group/_age-group.scss";
import ageGroupData from "../../data/ageGroupData";
import AgeGroupCard from "./AgeGroupCard";

const AgeGroup = () => {
  return (
    <section className="age-group-section">
      <div className="inner-wrapper">
        <div className="container">
          <div className="heading-wrapper">
            <h1 className="heading">Browse by Age Group</h1>
          </div>
          <div className="age-wrapper d-flex flex-column flex-xl-row justify-content-between">
            {ageGroupData.map((item,index) => (
              <AgeGroupCard img={item.img} year={item.years} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroup;
