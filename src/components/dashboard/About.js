import React from "react";
import {Link} from "react-router-dom";

const Content2 = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui container center aligned">
                <h2 className="underline1">About us</h2> <br/>
                <div className="ui four column grid">
                    <div className="column">
                        <div className="ui small image">
                            <img src="about1.png" />
                        </div>
                        <h5>Started from 2019</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src="about2.png" />
                        </div>
                        <h5>Sold over 1 crore</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src="about3.png" />
                        </div>
                        <h5>Desire then desi!</h5>
                    </div>
                    <div className="column">
                        <div className="ui small image">
                            <img src="about4.png" />
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