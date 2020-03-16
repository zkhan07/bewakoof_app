import React from "react";

import a1 from '../images/a1.png';
import a2 from '../images/a2.png';
import pay1 from '../images/pay1.jpg';
import pay2 from '../images/pay2.jpg';
import pay3 from '../images/pay3.jpg';
import pay4 from '../images/pay4.jpg';




const Footer = () => {
    return(
        <div style={{backgroundColor: "#262626", color: "yellow"}}>
               
      
            <br/><br/>
            <div className="ui container">
            <div className="doubling stackable ui equal width Column grid">
             
                <div className="column">
                    <h2>Bewakoof.in</h2>
                    <h3>CUSTOMER SERVICE</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>Contact Us</a>
                        <a class="item" style={{color: "white"}}>Track Order</a>
                        <a class="item" style={{color: "white"}}>Return Order</a>
                        <a class="item" style={{color: "white"}}>Cancel Order</a>
                    </div>

                    <br/><br/>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>15 Days return policy</a>
                        <a class="item" style={{color: "white"}}> Cash on delivery*</a>
                        <a class="item" style={{color: "white"}}>Pay online & get free shipping.</a>
                    </div>
                </div>

                <div className="column">
                    <br/><br/>
                    <h3>COMPANY</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>About Us</a>
                        <a class="item" style={{color: "white"}}>We're Hiring</a>
                        <a class="item" style={{color: "white"}}>Term & Conditions</a>
                        <a class="item" style={{color: "white"}}>Privacy Policy</a>
                        <a class="item" style={{color: "white"}}>Blog</a>
                    </div>

                    <br/>
                    <div class="ui link list">
                        <h5>DOWNLOAD THE APP</h5>
                        <a class="item">
                            <img src={a1} height="30px" width="100px" />
                            <img src={a2} height="30px" width="100px" />
                        </a>
                    </div>
                </div>

                <div className="column">
                    <br/><br/>
                    <h3>CONNECT WITH US</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}><i className="ui yellow large facebook icon"></i> 4.7M People Like this</a>
                        <a class="item" style={{color: "white"}}><i className="ui yellow large instagram icon"></i> 1M Followers</a>
                        <a class="item">
                            <i className="ui yellow large twitter icon"></i>
                            <i className="ui yellow large pinterest icon"></i>
                            <i className="ui yellow large snapchat icon"></i>
                            <i className="ui yellow large apple icon"></i>
                        </a>
                    </div>

                    <br/><br/>
                    <div class="ui link list">
                        <h5>100% SECURE PAYMENT</h5>
                        <a class="item">
                            <img src={pay1} height="30px" width="50px" />
                            <img src={pay2} height="30px" width="50px" />
                            <img src={pay3} height="30px" width="50px" />
                            <img src={pay4} height="30px" width="50px" />
                        </a>
                    </div>
                </div>

                <div className="column">
                    <br/><br/>
                    <h3>KEEP UP TO DATE</h3>
                    <div class="ui link list">
                        <div class="ui form">
                            <div class="fields">
                                <div class="field">
                                    <input type="text" placeholder="Enter Email Id" />
                                </div>
                                <div class="field">
                                    <button className="ui yellow button">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <br/><br/>
            <div className="ui divider"></div>

            {/* 2nd Wala Container */}
            <div className="ui container">
            <div className="doubling stackable ui equal width Column grid">
             
                <div className="column">
                    <br/><br/>
                    <h3>MEN'S CLOTHING</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>Top Wear</a>
                        <a class="item" style={{color: "white"}}>Men's New Arrivals</a>
                        <a class="item" style={{color: "white"}}>Men's T-Shirts</a>
                        <a class="item" style={{color: "white"}}>Men's Long Sleeve T-shirts</a>
                        <a class="item" style={{color: "white"}}>Men's Shirts</a>
                        <br/>
                        <a class="item" style={{color: "white"}}>Bottom Wear</a>
                        <a class="item" style={{color: "white"}}>Men's Joggers</a>
                        <a class="item" style={{color: "white"}}>Men's Pants</a>
                        <br/>
                        <a class="item" style={{color: "white"}}>Featured</a>
                        <a class="item" style={{color: "white"}}>XXXL T Shirts</a>
                        <a class="item" style={{color: "white"}}>Men's Sliders</a>
                        <a class="item" style={{color: "white"}}>Game Of Thrones T-Shirts</a>
                    </div>
                </div>

                <div className="column">
                    <br/><br/>
                    <h3>WOMEN'S CLOTHING</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>Women's Top Wear</a>
                        <a class="item" style={{color: "white"}}>Women's New Arrivals</a>
                        <a class="item" style={{color: "white"}}>Women's T-Shirts</a>
                        <a class="item" style={{color: "white"}}>Women's Dresses</a>
                        <a class="item" style={{color: "white"}}>Women's 3/4 Sleeve T-Shirts</a>
                        <br/>
                        <a class="item" style={{color: "white"}}>Women's Bottom Wear</a>
                        <a class="item" style={{color: "white"}}>Women's Joggers</a>
                        <br/>
                        <a class="item" style={{color: "white"}}>Women's Joggers</a>
                        <br/>
                        <a class="item" style={{color: "white"}}>Featured</a>
                        <a class="item" style={{color: "white"}}>XXXL Clothes</a>
                        <a class="item" style={{color: "white"}}>Women's Slides</a>
                        <a class="item" style={{color: "white"}}>Clearance Zone</a>
                    </div>

                </div>

                <div className="column">
                    <br/><br/>
                    <h3>MOBILE COVERS</h3>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}>Brands</a>
                        <a class="item" style={{color: "white"}}>Apple</a>
                        <a class="item" style={{color: "white"}}>Motorola</a>
                        <a class="item" style={{color: "white"}}>Samsung</a>
                        <a class="item" style={{color: "white"}}>Xiaomi</a>
                        <a class="item" style={{color: "white"}}>Oneplus</a>
                        <a class="item" style={{color: "white"}}>Vivo</a>
                        <a class="item" style={{color: "white"}}>Nokia</a>
                    </div>

                </div>

                <div className="column">
                    <br/><br/><br/>
                    <div class="ui link list">
                        <a class="item" style={{color: "white"}}><h3>FANBOOK</h3></a>
                        <a class="item" style={{color: "white"}}><h3>OFFERS</h3></a>
                        <a class="item" style={{color: "white"}}><h3>SITEMAP</h3></a>
                    </div>
                </div>
    
                <a href="#"><i className="big arrow alternate circle up outline icon icon1"></i></a>

            </div>
        </div>

        <br/><br/>

        <div className="ui container"  style={{color: "white"}}>
            <h4>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h4>
            <p>Founded in 2012, Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness.</p> <br/>
            <p>With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.</p> <br/>
            <h4>ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!</h4>
            <p>Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call Bewakoof.com.</p> <br/>
            <p>Bewakoof, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.</p> <br/>
            <br/><br/>
        </div>
       
    
        <div className="doubling stackable ui fluid container footer1"> <br/>
           <div className="ui grid center aligned">
                <h5> @2020ParkingApp.CopyrightbyZaidKhan </h5>
           </div><br/>
        </div>

        </div>
    );
}

export default Footer;