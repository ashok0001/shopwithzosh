import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './HomeCaroselData';

const handleDragStart = (e) => e.preventDefault();

const items = [
  
  
  <img src="path-to-img" width={"100vw"} alt='' onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" alt='' onDragStart={handleDragStart} role="presentation" />,
];

const item=homeCarouselData.map((item)=> <img src={item} alt='' onDragStart={handleDragStart} role="presentation" />,)

const HomeCarousel = () => {
  return (
    <AliceCarousel 
     mouseTracking 
     items={item} 
     autoPlay
     infinite
    autoPlayInterval={2000}
    disableButtonsControls
     />
  );
}

export default HomeCarousel;