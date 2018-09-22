import React from "react";
//import Slider from "react-slick";
import img1 from "./images/slide_2.jpg";
import img4 from "./images/slide_5.jpg";
import img5 from './images/slide_6.jpg';
import BackgroundSlideshow from 'react-background-slideshow';

class BackgroundSlider extends React.Component {
  render() {
    /*var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true
    };*/
    return (
      <BackgroundSlideshow
      images={[ img1, img4, img5 ]}>
      </BackgroundSlideshow>
    );
  }
}

export default BackgroundSlider;