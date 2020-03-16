import React from "react";
import {Link} from "react-router-dom";

const Content2 = () => {
    return(
        <div>

            <br/><br/><br/><br/>
            <div className="ui container center aligned">
                <h2 className="underline1">Recommended Collections</h2> <br/>
                <div className="ui two column grid">

                    <div className="column">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src="img7.jpg" />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src="img8.jpg"  />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src="img4.jpg" />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src="img3.jpg"  />
                            </div>
                        </Link>
                    </div>

                    <img src="b8.jpg" className="cardsliderimg2" />

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
                               <img src="img7.jpg"  />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/contactus">
                            <div className="ui image">
                               <img src="img4.jpg" />
                            </div>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/aboutus">
                            <div className="ui image">
                               <img src="img8.jpg"  />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <br/><br/><br/><br/>

        </div>
    );
}

export default Content2;