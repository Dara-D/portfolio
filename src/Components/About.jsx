import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBBadge,
} from "mdbreact";

const About = () => {
  return (
    <div className="aboutComp">
      <MDBContainer>
        Me working?
        <h1>
          {" "}
          My name is dara , and i am cool and i know hoe to{" "}
          <MDBBadge color="primary">New</MDBBadge> program this app
        </h1>
      </MDBContainer>
    </div>
  );
};

export default About;
