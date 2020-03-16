import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
        <div className="ui container">

            <div className="ui container center aligned">
                <h2 className="underline1">Mobile Covers</h2>
                <Slider {...settings}>
                    <div className="ui segment">
                        <h2>Redmi</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Samsung</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Vivo</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Apple</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Oppo</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Nokia</h2>
                    </div>
                    <div className="ui segment">
                        <h2>RealMe</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Motorola</h2>
                    </div>
                    <div className="ui segment">
                        <h2>Lenovo</h2>
                    </div>
                    <div className="ui segment">
                        <h2>One Plus</h2>
                    </div>
                </Slider>
            </div>

      </div>
    );
  }
}