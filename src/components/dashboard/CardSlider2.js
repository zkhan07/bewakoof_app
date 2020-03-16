import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";

export default class Responsive extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 4000
    };
    return (
      <div>

        <br/><br/>
        <div className="ui container">
        <Slider {...settings}>
            <div>
                <img src="banner1.jpg" className="cardsliderimg2" />
            </div>
            <div>
                <img src="banner2.jpg" className="cardsliderimg2" />
            </div>
            <div>
                <img src="b1.jpg" className="cardsliderimg2" />
            </div>
        </Slider>
        </div>
        <br/><br/><br/>

      </div>
    );
  }
}