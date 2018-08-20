import React from "react";
import Slider from "react-slick";
import img1 from "./images/slide_2.jpg";
import img4 from "./images/slide_5.jpg";
import img5 from "./images/slide_6.jpg";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="headerimage" src={img1} alt='1' />
        </div>
        <div>
          <img className="headerimage" src={img4} alt ='1' />
        </div>
        <div>
          <img className="headerimage" src={img5} alt='1' />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;