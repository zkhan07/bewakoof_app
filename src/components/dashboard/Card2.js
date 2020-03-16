import React from "react";
import {Link} from "react-router-dom";
import b7 from '../images/b7.jpg';

const Card2 = () => {
    return(
        <div>

            <div className="ui container center aligned">
                <h2 className="underline1">Bewakoof Delights</h2> <br/>
                <img src={b7} className="cardsliderimg2" />
            </div>

            <br/><br/>
        
        </div>
    );
}

export default Card2;