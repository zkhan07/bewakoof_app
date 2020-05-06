import React from "react";
import {Link} from "react-router-dom";
import b9 from '../images/b9.jpg';

const Card1 = () => {
    return(
        <div>

            <div className="ui container center aligned">
                <h1 className="underline1">Color of the Month</h1> <br/>
                <img src={b9} className="cardsliderimg2" />
            </div>

        </div>
    );
}

export default Card1;