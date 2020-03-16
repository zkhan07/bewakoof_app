import React from "react";
import Navbar from "../navbar/Navbar";
// import Image from "./Image";
import CardSlider2 from "./CardSlider2";
import CardSlider from "./CardSlider";
import CardSlider1 from "./CardSlider1";
import Men from "./Men";

import Card from "./Card";

import Card1 from "./Card1";
import About from "./About";
import Card2 from "./Card2";

import Slider from "./Slider"
import Content1 from "./Content1";
import Content2 from "./Content2";
import Adds from "./Adds";

import Footer from "./Footer";
import "../Style.css";
import Content3 from "./Content3";



const Dashboard = () => {
  return(
    <div>
      <Navbar />
      <Card />
      <CardSlider2 />
      <Content1 />
      <CardSlider1 />

      <Card1 />
      <About />
      <Card2 />

      <Slider />

      <Content2 />
      <Content3 />
 
      {/* <CardSlider /> */}
    


      <Footer />
    </div>
  );
}

export default Dashboard;















