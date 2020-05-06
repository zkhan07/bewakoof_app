import React from "react";
import {Link} from "react-router-dom";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import b8 from "../images/b8.jpg";

const Content2 = () => {
    return(
        <div>

            <br/><br/><br/><br/>
            <div className="ui container center aligned">
                <h1 className="underline1">Recommended Collections</h1> <br/>
                <div className="ui two column grid">

                    <div className="column divimg">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src={img7} />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src={img8}  />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src={img4} />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src={img3}  />
                            </div>
                        </Link>
                    </div>

                    <div className="sixteen wide column divimg">
                        <img src={b8} className="cardsliderimg2" />
                    </div>

                    <div className="column divimg">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src={img3} />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src={img7}  />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src={img4} />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src={img8}  />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <br/><br/><br/>

        </div>
    );
}

export default Content2;