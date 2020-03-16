import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div  style={{backgroundColor: "#f2f2f2"}}>

        <br/><br/>
        <div className="ui container">
        <h1> MEDIA MENTIONS </h1>
        <Slider {...settings}>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s1.jpg" />
                </div>
                <h2>liveMint Business</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s2.jpg" />
                </div>
                <h2>The Eco Disruptor</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s3.jpg" />
                </div>
                <h2>Business Standard</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s4.jpg" />
                </div>
                <h2>The Economic Time</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s1.jpg" />
                </div>
                <h2>liveMint Business</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s2.jpg" />
                </div>
                <h2>The Eco Disruptor</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s3.jpg" />
                </div>
                <h2>Business Standard</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
            <div className="ui segment">
                <div className="ui image">
                    <img src="s4.jpg" />
                </div>
                <h2>The Economic Time</h2>
                <p>The Traditional parking equipment operates in silos and at best might work together with other products from the same manufacturer.</p>
            </div>
        </Slider>
        </div>
        <br/><br/><br/>

      </div>
    );
  }
}