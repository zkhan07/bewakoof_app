import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import b1 from '../images/b1.jpg';

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
      <div className="ui container">

        <br/><br/>
        <div className="ui container center aligned">
        <h2 className="underline1">Bewakoofs Sales</h2>
        <Slider {...settings}>
            <div>
                <img src={banner1} className="cardsliderimg2" />
            </div>
            <div>
                <img src={banner2} className="cardsliderimg2" />
            </div>
            <div>
                <img src={b1} className="cardsliderimg2" />
            </div>
        </Slider>
        </div>
        <br/><br/>

      </div>
    );
  }
}