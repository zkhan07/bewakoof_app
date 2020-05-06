import React from "react";
import {Link} from "react-router-dom";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const Content1 = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui container center aligned">
                <h1 className="underline1">Design of the Day - Men</h1>
                <div className="ui equal width center aligned  grid">
                    <div className="row">
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
                                <img src={img4}  />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <br/><br/>
            <div className="ui container center aligned">
                <h1 className="underline1">Design of the Day - Women</h1> <br/>
                <div className="ui two column grid">
                    <div className="column divimg">
                        <Link to="/contactus">
                            <div className="ui image">
                                <img src={img1}  />
                            </div>
                        </Link>
                    </div>
                    <div className="column divimg">
                        <Link to="/aboutus">
                            <div className="ui image">
                                <img src={img5}  />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Content1;