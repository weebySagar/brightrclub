import BooksCard from '@components/ui/bookscard/BooksCard';
import React from 'react';
import Slider from 'react-slick';

import topBooks from '../../data/topBooks';
import "@styles/top books/_top-books.scss";

const TopBooks = () => {
    const settings={
        "slidesToShow":5,
        "slidesToScroll":1,
        "infinte":false,
        // "centerMode":true,
        responsive:[
            {
                breakpoint: 1500,
                settings:{
                    "slidesToShow":5
                }
            },
            {
                breakpoint: 1200,
                settings:{
                    "slidesToShow":4
                }
            },
            {
                breakpoint: 991,
                settings:{
                    "slidesToShow":3
                }
            },

            {
                breakpoint: 767,
                settings:{
                    "slidesToShow":2
                }
            },
            {
                breakpoint: 576,
                settings:{
                    "slidesToShow":1
                }
            },
        ]
    }
  return (
    <section className='top-books'>
        <div className="inner-wrapper">
        <div className="container">

       
        <div className="title-wrapper">
            <h1 className="heading">Top 10 Books</h1>
        </div>

        <div className="top-books-slider">

        <Slider {...settings}>
        {
            topBooks.map(book=><BooksCard showNumber={true} key={book.id} {...book}/>)
        }
        </Slider>
        </div>
        </div>
        </div>
    </section>
  )
}

export default TopBooks