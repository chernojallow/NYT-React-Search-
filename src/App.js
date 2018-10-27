import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Discover from "./pages/Discover";
import {Container} from './components/Grid'
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from './components/Nav'
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <Container fluid>
     
        <Route exact path="/:saved" component={Saved} />
        <Route exact path="/component" component={Search} />

      </Container>
  </Router>
);

export default App;
