import React from "react";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBNavbarToggler,
  MDBCollapse,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { BrowserRouter as Router, Route } from "react-router-dom";

const NavComponent = () => {
  return (
    // <Router>
    //   <MDBNavbar left>
    //     <MDBNavItem>
    //       <MDBNavLink to="/">Home</MDBNavLink>
    //     </MDBNavItem>

    //     <MDBNavItem>
    //       <MDBNavLink to="/About">About Me</MDBNavLink>
    //     </MDBNavItem>

    //     <MDBNavItem>
    //       <MDBNavLink to="/Bio">Bio</MDBNavLink>
    //     </MDBNavItem>

    //     <MDBNavItem>
    //       <MDBNavLink to="/Portfolio">Portfolio</MDBNavLink>
    //     </MDBNavItem>

    //   </MDBNavbar>
    // </Router>

    <div className="navComp">
      <a href="/">Home</a> <a href="/About">About Me</a>{" "}
      <a href="/Contact">Contact</a> <a href="/Portfolio">Portfolio</a>
    </div>
  );
};

export default NavComponent;
