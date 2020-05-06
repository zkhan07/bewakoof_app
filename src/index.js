import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';


import Dashboard from "./components/dashboard/Dashboard";

import Tshirt from "./components/men/Tshirt";
import Shirt from "./components/men/Shirt";

import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Sector from "./components/sector/Sector";
import Products from "./components/products/Products";

import "./components/Style.css";



ReactDOM.render(

<HashRouter>

    <Route exact path="/" component={Dashboard}/>

    <Route exact path="/tshirt" component={Tshirt}/>
    <Route exact path="/shirt" component={Shirt}/>

    <Route exact path="/sector" component={Sector}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/contactus" component={Contactus}/>
    <Route exact path="/aboutus" component={Aboutus}/>

</HashRouter>,
document.getElementById("root"));