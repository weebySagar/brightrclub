import React from "react";
import Slider from "react-slick";

import "@styles/popular series/_popular-series.scss";
import popularSeriesData from "../../data/popularSeriesData";
import BooksCard from "@components/ui/bookscard/BooksCard";
import CloseImg from "@images/close.svg"
import elephantAndPiggieData from "../../data/elephantAndPiggieData";

const PopularSeries = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinte: false,
    // "centerMode":true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="popular-series bg-dark">
      <div className="overlay"></div>
      <div className="inner-wrapper">
        <div className="container">
          <div className="title-wrap">
            <h1 className="heading">Popular Series</h1>
          </div>

          <div className="popular-slider">
            <Slider {...settings}>
              {popularSeriesData.map((book) => (
                <BooksCard key={book.id} {...book} />
              ))}
            </Slider>
          </div>
          <hr />
          <div className="selected-book">
            <div className="header d-flex justify-content-between">
              <div className="title-wrap">
                <h1 className="heading">
                  Elephant and Piggie <span>24 Books</span>
                </h1>
              </div>
              <div className="close-btn">
                <img src={CloseImg} alt="" srcset="" />
              </div>
            </div>

            <div className="selected-book-slider">
                <Slider {...settings}>

                {
                    elephantAndPiggieData.map(book=><BooksCard key={book.id} {...book}/>)
                }
                </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSeries;
