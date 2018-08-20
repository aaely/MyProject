import React from "react";
import Slider from "react-slick";
import img1 from "./images/coffee1.jpg";
import img2 from "./images/coffee2.jpg";
import img3 from "./images/coffee3.jpg";

class CoffeeSlider extends React.Component {
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
          <img className="coffeeimage" alt = '1' src={img1} />
        </div>
        <div>
          <img className="coffeeimage" alt = '1' src={img2} />
        </div>
        <div>
          <img className="coffeeimage" alt = '1' src={img3} />
        </div>
      </Slider>
    );
  }
}

export default CoffeeSlider;