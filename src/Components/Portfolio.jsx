import React from "react";
import LearnGoImg from "./LearnGoImg.png";
import PorfolioImg from "./PorfolioImg.PNG";


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Portfolio = () => {
  return (
    <div className="PortfolioComp">
      <div className='ProjectsIntro'>
        <p> heey .. Check out my projects and what I did </p>
      </div>
      <div className='ProjectsCards'> 
        <div className='ProjectsCard1'>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem" }}>
              <MDBCard>
                <a href="https://hungry-lichterman-b823f1.netlify.app/">
                  <MDBCardImage className="proImg" style={{ height: "25rem"}} src={LearnGoImg} />
                </a>
                <MDBCardBody className="text-center">
                  <MDBCardTitle>LearnGo</MDBCardTitle>
                  <MDBCardText>
                    An app  to help student who are going
                    through Learn.Co curriculum, that we went through and try to make it
                    easier for them.
                  </MDBCardText>
                  <a href="#!" className="icons-sm li-ic ml-1">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                  <a href="#!" className="icons-sm tw-ic ml-1">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="#!" className="icons-sm fb-ic ml-1">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>

        <div className='ProjectsCard1'>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem" }}>
              <MDBCard>
                <a href="/">
                  <MDBCardImage style={{ height: "25rem" }} src={PorfolioImg} />
                </a>
                <MDBCardBody className="text-center">
                  <MDBCardTitle>My Porfolio</MDBCardTitle>
                  <MDBCardText>
                    The idea behind this app is to help people who are going
                    through what we already went through and try to make it
                    easier for them.
                  </MDBCardText>
                  <a href="#!" className="icons-sm li-ic ml-1">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                  <a href="#!" className="icons-sm tw-ic ml-1">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="#!" className="icons-sm fb-ic ml-1">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
