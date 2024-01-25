import React from "react";

import BestSellers from "@components/best sellers/BestSellers";
import "@styles/books/_books.scss";
import BooksCard from "@components/ui/bookscard/BooksCard";
import Slider from "react-slick";

const Books = ({ title, booksData }) => {
    const settings = {
        slidesToShow: 6,
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
    <section className="books">
        <div className="title-wrapper">
          <h1 className="heading">{title}</h1>
        </div>
        <div className="gallery">
            <Slider {...settings}>

            {booksData.map(book=><BooksCard key={book.id} {...book}/>)}
            </Slider>
      </div>
    </section>
  );
};

export default Books;
