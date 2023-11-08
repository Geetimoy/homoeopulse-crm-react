import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import clayelliot from '../images/clay-elliot.jpg';
import toddkent from '../images/todd-kent.jpg';
import clayelliot2 from '../images/clay-elliot-2.jpg'

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={clayelliot} alt="" />
      </div>
      <div>
        <img src={toddkent} alt="" />
      </div>
      <div>
        <img src={clayelliot2} alt="" />
      </div>
      {/* Add more slides here */}
    </Slider>
  );
}

export default MyCarousel;