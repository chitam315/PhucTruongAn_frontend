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

>>>>>>> 4586fad322d7c1146896c750b80679f70bc29f4a
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
>>>>>>> 4586fad322d7c1146896c750b80679f70bc29f4a
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
