import React from 'react';

import bestSellers from '../../data/bestSellers';
import BooksCard from '@components/ui/bookscard/BooksCard';
import Slider from 'react-slick';

const BestSellers = () => {
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
    <section className='bestsellers'>
        <div className="title-wrapper">
            <h1 className="heading">Best Sellers</h1>
        </div>
        <div className="bestsellers-slider">
            <Slider {...settings}>

            {
                bestSellers.map(book=><BooksCard key={book.id} {...book}/>)
            }
            </Slider>
        </div>
    </section>
  )
}

export default BestSellers