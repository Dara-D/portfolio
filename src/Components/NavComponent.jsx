import React from "react";
import {  MDBNavbar, MDBNavLink } from "mdbreact";

const NavComponent = () => {
  return (
    <div className='Nav'>

      <MDBNavbar >
          <MDBNavLink className='Navitem' to="/">Home</MDBNavLink>
          <MDBNavLink className='Navitem' to="/About">About Me</MDBNavLink>
          <MDBNavLink className='Navitem' to="/Bio">Bio</MDBNavLink>
          <MDBNavLink className='Navitem' to="/Portfolio">Projects</MDBNavLink>
          <MDBNavLink className='Navitem' to="/Contact">Contact</MDBNavLink>
      </MDBNavbar>
      </div>

  
  );
};

export default NavComponent;
