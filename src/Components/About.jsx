import React from "react";
import women from './women.svg'
import Typed from "react-typed";
import { MDBContainer } from "mdbreact";

const About = () => {
  return (
    <div className="aboutComp">
      <MDBContainer>
  
      <img src={women} className="App-startBtn" alt="Start" />
        <p className='bioText'>
        
          <Typed strings={['Syrian Interion designer, Web developer, and an Entrepreneur.<br/> keen to enhance her skills along with any opportunity and always tries to offer her modest experiences in exchange of more.']}
          typeSpeed={40}
        
        ></Typed>
        </p>
      </MDBContainer>
    </div>
  );
};

export default About;

