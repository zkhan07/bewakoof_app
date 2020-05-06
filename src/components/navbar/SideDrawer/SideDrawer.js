import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>

        <div class="doubling stackable ui menu">

              <br/>
              <div class="item" >
                <h2>Bewakoof.in</h2>
              </div>
              <div class="item" >
                <p>Welcome Guest</p>
              </div>

              <div class="item" >
                <div className="ui fluid buttons">
                    <button className="ui yellow button">Sign In</button>
                    <div className="or"></div>
                    <button className="ui blue button">Sign Up</button>
                </div>
              </div>
            
            
              <div class="item">
                <Link to="/tshirt"><b>Men</b></Link>
              </div>

              <div class="item">
                <Link to="/sector" ><b>Women</b></Link>
              </div>
              <div class="item">
                <Link to="/aboutus"><b>Mobile Covers </b></Link>
              </div>
              <div class="item">
                <Link to="/contactus" ><b>Clearance Zone</b></Link>
              </div>

              <div class="item">
                <Link to="/aboutus"><b>About Us </b></Link>
              </div>
              <div class="item">
                <Link to="/contactus" ><b>Contact Us</b></Link>
              </div>

              

              <div class="item">
                <i className="search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
    
              <div class="item">
                <Link to="/#"><i className="mail big icon"></i></Link>
                <Link to="/#"><i className="facebook big icon"></i></Link>
                <Link to="/#"><i className="twitter big icon"></i></Link>
                <Link to="/#"><i className="linkedin big icon"></i></Link>
                <Link to="/#"><i className="instagram big icon"></i></Link>
              </div>
         
          
          </div>
  










    </nav>
  );
};

export default sideDrawer;
