import React from "react";
import women from './women.svg'
import Typed from "react-typed";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBBadge,
  MDBAnimation
} from "mdbreact";

const About = () => {
  return (
    <div className="aboutComp">
      <MDBContainer>
      {/* <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src={women} width='400px' />
        </MDBAnimation> */}
      <img src={women} className="App-startBtn" alt="Start" />
        <p className='bioText'>
        
        {/* Syrian Interion designer, Web developer, and an Entrepreneur.<br/> */}
        {/* keen to enhance her skills along with any opportunity and always tries to offer her modest experiences in exchange of more. */}
          <Typed strings={['Syrian Interion designer, Web developer, and an Entrepreneur.<br/> keen to enhance her skills along with any opportunity and always tries to offer her modest experiences in exchange of more.']}
          typeSpeed={40}
        
        ></Typed>
        </p>
      </MDBContainer>
    </div>
  );
};

export default About;

