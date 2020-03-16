import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
          <div className="ui mini image">
            <img src="logo3.png" height="150" width="200" />
          </div>
            <b>Bewakoof.in</b>
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
          
             
              
 			    <div class="ui simple dropdown item">
				<div> MEN </div>
				<i class="dropdown icon"></i>
          		<div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>Top Wear</h3>
						<div class="item"> <a href="womenshoes">T-Shirts </a></div> 
						<div class="item"> <a href="commodity">Vest </a></div> 
						<div class="item"> <a href="indices">Hoodoes </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
							<h3>Bottom Wear</h3>
							<div class="item"> <a href="womenshirt"> shirt </a></div> 
							<div class="item"> <a href="commodity"> Jerseys  </a></div> 
							<div class="item"> <a href="indices"> Pants & Tights </a></div> 
							<div class="item"> <a href="stocks">   Shorts </a></div> 
							<div class="item"> <a href="conditions"> Sweatshirts </a></div> 

							<br/><br/>
							<h3>Footwear</h3>
							<div class="item"> <a href="stocks">Sliders</a></div> 
						</div> 

						<div className="three wide column">
						<h3>Accessories</h3>
						<div class="item"> <a href="womenjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

					</div>
					</div>
					</div>
                </div>
			

 			    <div class="ui simple dropdown item">
				<div> WOMEN </div>
				<i class="dropdown icon"></i>
                  <div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>FOOTWEAR</h3>
						<div class="item"> <a href="womenshoes"> shoes </a></div> 
						<div class="item"> <a href="commodity"> Basketball  </a></div> 
						<div class="item"> <a href="indices"> Cricket </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
						<h3>CLOTHING</h3>
						<div class="item"> <a href="womenshirt"> shirt </a></div> 
						<div class="item"> <a href="commodity"> Jerseys  </a></div> 
						<div class="item"> <a href="indices"> Pants & Tights </a></div> 
						<div class="item"> <a href="stocks">   Shorts </a></div> 
						<div class="item"> <a href="conditions"> Sweatshirts </a></div> 
						<div class="item"> <a href="trading">  Tank & Shirts </a></div> 
						<div class="item"> <a href="account"> Tracksuits </a></div> 
						<div class="item"> <a href="conditions"> T-Shirts & Polos </a></div> 
						<div class="item"> <a href="trading">  Windbreakers </a></div> 
						<div class="item"> <a href="account"> adidas Originals </a></div> 
						</div> 

						<div className="three wide column">
						<h3>ACCESSORIES</h3>
						<div class="item"> <a href="womenjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

						<div className="three wide column">
						<h3>SPORTS</h3>
						<div class="item"> <a href="whatforex"> What is Forex? </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div>

					</div>
					</div>
					</div>
                </div>


				<div class="ui simple dropdown item">
				<div>MOBILE COVERS </div>
				<i class="dropdown icon"></i>
          		<div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>Top Wear</h3>
						<div class="item"> <a href="womenshoes">T-Shirts </a></div> 
						<div class="item"> <a href="commodity">Vest </a></div> 
						<div class="item"> <a href="indices">Hoodoes </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
							<h3>Bottom Wear</h3>
							<div class="item"> <a href="womenshirt"> shirt </a></div> 
							<div class="item"> <a href="commodity"> Jerseys  </a></div> 
							<div class="item"> <a href="indices"> Pants & Tights </a></div> 
							<div class="item"> <a href="stocks">   Shorts </a></div> 
							<div class="item"> <a href="conditions"> Sweatshirts </a></div> 

							<br/><br/>
							<h3>Footwear</h3>
							<div class="item"> <a href="stocks">Sliders</a></div> 
						</div> 

						<div className="three wide column">
						<h3>Accessories</h3>
						<div class="item"> <a href="womenjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

					</div>
					</div>
					</div>
                </div>
		

				<div class="ui simple dropdown item">
				<div>CLEARANCE ZONE</div>
				<i class="dropdown icon"></i>
          		<div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>Top Wear</h3>
						<div class="item"> <a href="womenshoes">T-Shirts </a></div> 
						<div class="item"> <a href="commodity">Vest </a></div> 
						<div class="item"> <a href="indices">Hoodoes </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
							<h3>Bottom Wear</h3>
							<div class="item"> <a href="womenshirt"> shirt </a></div> 
							<div class="item"> <a href="commodity"> Jerseys  </a></div> 
							<div class="item"> <a href="indices"> Pants & Tights </a></div> 
							<div class="item"> <a href="stocks">   Shorts </a></div> 
							<div class="item"> <a href="conditions"> Sweatshirts </a></div> 

							<br/><br/>
							<h3>Footwear</h3>
							<div class="item"> <a href="stocks">Sliders</a></div> 
						</div> 

						<div className="three wide column">
						<h3>Accessories</h3>
						<div class="item"> <a href="womenjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

					</div>
					</div>
					</div>
                </div>
            

            

            
             
        
              <div class="right item">
                <i className="grey search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>

			  <div class="item">
                <Link to="/">Login </Link>
              </div>
			  <div class="item">
                <Link to="/"><i className="large heart icon"></i></Link>
              </div>
			  <div class="item">
                <Link to="/"><i className="large cart icon"></i></Link>
              </div>

        
        </div>
      </div>


        </div>
    </nav>
  </header>
);

export default toolbar;
