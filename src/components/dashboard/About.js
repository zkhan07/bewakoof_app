import React from "react";
import {Link} from "react-router-dom";

import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';
import about4 from '../images/about4.png';

const Content2 = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui container center aligned">
                <h2 className="underline1">About us</h2> <br/>
                <div className="ui four column grid">
                    <div className="column">
                        <div className="ui small image">
                            <img src={about1} />
                        </div>
                        <h5>Started from 2019</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src={about2} />
                        </div>
                        <h5>Sold over 1 crore</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src={about3} />
                        </div>
                        <h5>Desire then desi!</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src={about4} />
                        </div>
                        <h5>Began with the 2</h5>
                    </div>
                </div>
            </div>


            <br/><br/><br/><br/>

        </div>
    );
}

export default Content2;