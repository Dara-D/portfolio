import React from "react";
import { MDBNavbar, MDBNavLink } from "mdbreact";

const NavComponent = () => {
  return (
    <div className="Nav">
      <MDBNavbar>
        <MDBNavLink className="Navitem" to="/portfolio">
          Home
        </MDBNavLink>
        <MDBNavLink className="Navitem" to="/portfolio/About">
          About Me
        </MDBNavLink>
        <MDBNavLink className="Navitem" to="/portfolio/Bio">
          Bio
        </MDBNavLink>
        <MDBNavLink className="Navitem" to="/portfolio/Projects">
          Projects
        </MDBNavLink>
        <MDBNavLink className="Navitem" to="/portfolio/Contact">
          Contact
        </MDBNavLink>
      </MDBNavbar>
    </div>
  );
};

export default NavComponent;
