<<<<<<< HEAD
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> 3dd8a64268824c9ae2c6c66258d35c50eea773d6

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
<<<<<<< HEAD
          <img className="w-full h-[500px]" src={image} alt="Slide" />
=======
          <img className='w-full h-[500px]' src={image} alt="Slide" />
>>>>>>> 3dd8a64268824c9ae2c6c66258d35c50eea773d6
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
