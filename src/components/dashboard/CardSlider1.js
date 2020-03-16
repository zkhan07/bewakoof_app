import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import "../Style.css";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';



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
      <div className="ui container">

        <br/><br/>
        <div className="ui container center aligned">
        <h2 className="underline1">Featured Categories</h2>
        <Slider {...settings}>
            <div>
                <Link to="#">
                    <img src={img1} className="cardsliderimg1" />
                    <h4>NoteBooks</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img2} className="cardsliderimg1" />
                    <h4>Mens Jeans</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img3} className="cardsliderimg1" />
                    <h4>Shoes</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img4} className="cardsliderimg1" />
                    <h4>Shirts</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img5} className="cardsliderimg1" />
                    <h4>T-Shirts</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img6} className="cardsliderimg1" />
                    <h4>Sendals</h4>
                </Link>
            </div>
            <div>
                <Link to="#">
                    <img src={img1} className="cardsliderimg1" />
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