import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Home from "./Home.js";
import Stuff from "./Stuff.js";
import Contact from "./Contact.js";
import Cube from "./Cube.js";

class Main extends Component  {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Ali's Blog</h1>
            <h2>Sushi For Health</h2>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Benefits</NavLink></li>
              <li><NavLink to="/cube">Gallary</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
            <div className="content">
            <Routes >
                <Route exact path="/" element={<Home />} />
                <Route path="/stuff" element={<Stuff />} />
                <Route path="/cube" element={<Cube />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
            </div>
            
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;
