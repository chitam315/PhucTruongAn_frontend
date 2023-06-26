import React from 'react';
import Carousel from './Carousel';
import carousel from "./banner.webp"


const CarouselSlice = () => {
  const images = [
   carousel
  
  ];

  return (
    <div>
    
      <Carousel  images={images} />
    </div>
  );
};

export default CarouselSlice;