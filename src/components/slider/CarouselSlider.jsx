import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const CarouselSlider = ({children}) => {
    const settings = {
        className: "new-arrival-slider",
        centerMode: true,
        infinite: true,
        centerPadding: "584px",
        slidesToShow: 1,
        slidesToScroll:1,
        speed: 500,
        responsive: [
          {
            breakpoint: 1900,
            settings: {
              centerPadding:"550px",
            },
          },
          {
            breakpoint: 1800,
            settings: {
              centerPadding:"500px",
            },
          },
          {
            breakpoint: 1700,
            settings: {
              centerPadding:"450px",
            },
          },
          {
            breakpoint: 1600,
            settings: {
              centerPadding:"400px",
            },
          },
          {
            breakpoint: 1500,
            settings: {
              centerPadding:"350px",
            },
          },
          {
            breakpoint: 1400,
            settings: {
              centerPadding:"300px",
            },
          },
           {
            breakpoint: 1300,
            settings: {
              centerPadding:"250px",
            },
          }, {
            breakpoint: 1200,
            settings: {
              centerPadding:"200px",
            },
          },
          {
            breakpoint: 1100,
            settings: {
              centerPadding:"150px",
            },
          },
          {
            breakpoint: 1000,
            settings: {
              centerPadding:"100px",
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              centerMode:false,
              // centerPadding:"0"
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode:false,
              // centerPadding:"0"
            },
          },
        ],
      };
  return (
    <Slider {...settings}>{children} </Slider>
  )
}

export default CarouselSlider