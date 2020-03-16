import React from "react";
import card1 from '../images/card1.jpg';
import {Link} from "react-router-dom";

const Card = () => {
    return(
        <div>

            <div>
                <img src={card1} className="cardimg" />
            </div>

        </div>
    );
}

export default Card;