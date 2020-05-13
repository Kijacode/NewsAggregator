import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="sticky">
      <div className="nav-wrapper" >
        <a href="#" className="brand-logo right">
         <h5> News Aggregator</h5>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/web">WebTrends</NavLink>
          </li>
          <li>
            {/* <a href="collapsible.html">SocialMediaTrends</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
