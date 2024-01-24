import React from "react";

import "@styles/age group/_age-group.scss";
import Img1 from "@images/age-group1.png";
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
            {ageGroupData.map((item) => (
              <AgeGroupCard img={item.img} year={item.years} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroup;
