import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel' ;
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="banner_img"
          src="https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="banner_img"
          src="https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
          alt="Second slide"
        />

      </Carousel.Item>


      <Carousel.Item>
        <img
          className="banner_img"
          src="https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}


export default Banner
