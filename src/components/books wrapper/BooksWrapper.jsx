import React from "react";

import Books from "@components/books/Books";
import bestSellers from "../../data/bestSellers";
import newArrivalData from "../../data/newArrivalData";
import peppaPigData from "../../data/peppaPigData";
import "@styles/books wrapper/_books-wrapper.scss";

const BooksWrapper = () => {
  return (
    <section className="books-wrapper">
      <div className="inner-wrapper">
        <div className="container">
          <Books title={"Best Sellers"} booksData={bestSellers} />
          <Books title={"New Arrival"} booksData={newArrivalData} />
          <Books title={"Peppa Pig"} booksData={peppaPigData} />
        </div>
      </div>
    </section>
  );
};

export default BooksWrapper;
