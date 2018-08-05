import React from "react";
import Slider from "react-slick";
import img1 from "./images/slide_2.jpg";
import img2 from "./images/slide_3.jpg";
import img3 from "./images/slide_4.jpg";
import img4 from "./images/slide_5.jpg";
import img5 from "./images/slide_6.jpg";
import img6 from "./images/slide_7.jpg";

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
          <img className="headerimage" src={img1} />
        </div>
        <div>
          <img className="headerimage" src={img4} />
        </div>
        <div>
          <img className="headerimage" src={img5} />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;