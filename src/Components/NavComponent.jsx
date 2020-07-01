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
    <div className='Nav'>

    
      <MDBNavbar >
          <MDBNavLink className='Navitem' to="/">Home</MDBNavLink>

          <MDBNavLink className='Navitem' to="/About">About Me</MDBNavLink>

          <MDBNavLink className='Navitem' to="/Bio">Bio</MDBNavLink>

          <MDBNavLink className='Navitem' to="/Portfolio">Portfolio</MDBNavLink>

      </MDBNavbar>
      </div>

  
  );
};

export default NavComponent;
