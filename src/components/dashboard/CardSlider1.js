import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import "../Style.css";

export default class Responsive extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
      <div>

        <br/><br/>
        <div className="ui container center aligned">
        <h2 className="underline1">Featured Categories</h2>
        <Slider {...settings}>
            <div>
                <Link to="#">
                    <img src="img1.jpg" className="cardsliderimg1" />
                    <h4>NoteBooks</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img2.jpg" className="cardsliderimg1" />
                    <h4>Mens Jeans</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img3.jpg" className="cardsliderimg1" />
                    <h4>Shoes</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img4.jpg" className="cardsliderimg1" />
                    <h4>Shirts</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img5.jpg" className="cardsliderimg1" />
                    <h4>T-Shirts</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img6.jpg" className="cardsliderimg1" />
                    <h4>Sendals</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src="img1.jpg" className="cardsliderimg1" />
                    <h4>Covers</h4>
                </Link>
            </div>
        </Slider>
        </div>
        <br/><br/><br/>

      </div>
    );
  }
}