//includes the Main React Dependencies
import React from "react";
import ReactDom from "react-dom";
//Implementing very simple routing for single-page-app
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";

// Render main route
ReactDom.render(
    (
        <BrowserRouter>
         <Route path ="/" component={Main} />
        
        </BrowserRouter>
    ),

    document.getElementById("app")
);