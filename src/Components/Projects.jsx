import React from "react";
import MovieImg from './MovieImg.PNG'
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

const Projects = () => {
  return (
    <div className="PortfolioComp">
      <div className='ProjectsIntro'>
        <p> heey .. Check out my projects and what I did </p>
      </div>
      <div className='ProjectsCards'> 
        <div className='ProjectsCard'>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem" }}>
              <MDBCard>
              <MDBCardTitle>LearnGo</MDBCardTitle>
              <p>Technologies Used: <span>ReactJS, MDBootstrap, CSS</span></p>
                <a href="https://github.com/bahaadabbagh/learnGo" target="_blank">
                {/* <a href="https://hungry-lichterman-b823f1.netlify.app/" target="_blank"> */}
                  <MDBCardImage className="proImg" style={{ height: "25rem"}} src={LearnGoImg} />
                </a>
                <MDBCardBody className="text-center">
                  <MDBCardText className='projDis'>
                    An app  to help student who are going
                    through Learn.Co curriculum, that we went through and try to make it
                    easier for them.
                  </MDBCardText>
                 
                  <a href="#!" className="icons-sm fb-ic ml-1">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>

        <div className='ProjectsCard'>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem" }}>
              <MDBCard>
              <MDBCardTitle>Netflix & Chill</MDBCardTitle>
              <p>Technologies Used: <span>Bootstrap, JavaScript, CSS</span></p>


                <a href="/About" target="_blank">
                  <MDBCardImage style={{ height: "25rem" }} src={MovieImg} />
                </a>
                <MDBCardBody className="text-center">
                  <MDBCardText className='projDis'>
                    An IMDB like app! find the movies you like here by searching using the name of the movie, name of the actor, or even by choosing the genre you prefere. and finally,, Chill!
                  </MDBCardText>
                  <a href="#!" className="icons-sm li-ic ml-1">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>

        <div className='ProjectsCard'>
          <MDBRow>
            <MDBCol style={{ maxWidth: "50rem" }}>
              <MDBCard>
              <MDBCardTitle>My Porfolio</MDBCardTitle>
              <p>Technologies Used: <span>ReactJS, MDBootstrap, CSS</span></p>


                <a href="/">
                  <MDBCardImage style={{ height: "25rem" }} src={PorfolioImg} />
                </a>
                <MDBCardBody className="text-center">
                  <MDBCardText className='projDis'>
                    A small web App for you to see my project, my skills, and some more bit about me ;D
                  </MDBCardText>
                  <a href="#!" className="icons-sm li-ic ml-1">
                    <MDBIcon fab icon="linkedin-in" />
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

export default Projects;
