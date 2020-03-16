import React from "react";

const Men = () => {
    return(
        <div>

            <div className="ui container">
                <div className="ui three column grid">

                    <div className="column">
                        <div className="ui segment">
                            <div class="ui fade reveal">
                                <div class="visible content">
                                        <a class="ui red right ribbon label">
                                            <i class="cart icon"></i> Add to Cart
                                        </a>
                                        <a className="ui left corner label huge">
                                            <i className="heart icon"></i>
                                        </a>
                                    <img src="t1.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                                <div class="hidden content">
                                        <a class="ui red right ribbon label">
                                            <i class="cart icon"></i> Add to Cart
                                        </a>
                                        <a className="ui left corner label huge">
                                            <i className="heart icon"></i>
                                        </a>
                                    <img src="t3.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                            </div>
                            <p><b>Half Mangos T-shirt</b></p>
                            <p><b>&#8377; 250</b></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div class="ui fade reveal">
                                <div class="visible content">
                                    <img src="t2.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                                <div class="hidden content">
                                    <img src="t1.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div class="ui fade reveal">
                                <div class="visible content">
                                    <img src="t1.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                                <div class="hidden content">
                                    <img src="t2.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div class="ui fade reveal">
                                <div class="visible content">
                                    <img src="t2.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                                <div class="hidden content">
                                    <img src="t1.jpg" class="ui image" width="500px" height="400px" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default Men;