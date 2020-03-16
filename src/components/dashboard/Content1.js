import React from "react";
import {Link} from "react-router-dom";

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
                               <img src="img3.jpg" />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src="img4.jpg"  />
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
                                <img src="img1.jpg"  />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                                <img src="img5.jpg"  />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Content1;