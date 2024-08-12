import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container cursor-pointer">
      <Slider {...settings}>
        <div className="width: 100 % height:300px object-fit:cover">
          <img src="/Poster.jpeg" alt="Poster 1" />
        </div>
        <div className="width: 100% height: 300px object-fit:cover">
          <img src="/Poster.jpeg" alt="Poster 2" />       
        </div>
        <div className="width: 100% height: 300px object-fit:cover">
          <img src="/Poster.jpeg" alt="Poster 3" />
        </div>
        <div className="width: 100px height: 100px">
          <img src="/Poster.jpeg" alt="Poster 1" />
        </div>
        <div className="width: 100px height: 100px">
          <img src="/Poster.jpeg" alt="Poster 1" />
        </div>
        <div className="width: 100px height: 100px">
          <img src="/Poster.jpeg" alt="Poster 1" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
