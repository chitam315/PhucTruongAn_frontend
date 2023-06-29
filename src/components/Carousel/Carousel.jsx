
<<<<<<< HEAD
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


=======
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> a5e9ae18b6abadb378db550911095b18d4b9f9f0
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
          <img className="w-full h-[500px]" src={image} alt="Slide" />
<<<<<<< HEAD

=======
>>>>>>> a5e9ae18b6abadb378db550911095b18d4b9f9f0
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
