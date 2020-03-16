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
                <h2 className="underline1">Design of the Day - Men</h2>
                <div className="ui two column grid">
                    <div className="column">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src={img3} />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src={img4}  />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            <br/><br/><br/><br/>
            <div className="ui container center aligned">
                <h2 className="underline1">Design of the Day - Women</h2>
                <div className="ui two column grid">
                    <div className="column">
                        <Link to="/contactus">
                            <div className="ui image">
                                <img src={img1}  />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
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