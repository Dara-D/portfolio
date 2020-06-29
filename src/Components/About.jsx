import React from "react";
import women from './women.svg'
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
      <img src={women} className="App-startBtn" alt="Start" />
        <h4 className='bioText'>
        
        Syrian Interion designer, Web developer, and an Entrepreneur.<br/>
        keen to enhance her skills along with any opportunity and always tries to offer her modest experiences in exchange of more.
          
        </h4>
      </MDBContainer>
    </div>
  );
};

export default About;
