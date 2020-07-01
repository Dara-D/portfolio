import React from "react";
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

const Contact = () => {
  return (
    <div className="ContactComp">
      <img
        hover
        overlay="white-slight"
        className="card-img-top"
        src="https://scontent.fist6-1.fna.fbcdn.net/v/t1.0-9/s960x960/59627672_10157372621791941_8782890533258264576_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=VH8BOYv6DV0AX9UcbtQ&_nc_ht=scontent.fist6-1.fna&_nc_tp=7&oh=0538511685e027a346c576e73c3e9895&oe=5F0C235A"
        alt="Dara"
        width="100px"
      ></img>

      {/* <h5 className="pink-text">Contributor</h5> */}

      {/* <p>
        Dara Aldandashi
      </p> */}

      {/* <p className="font-weight-bold blue-text">Find me here</p> */}

      <MDBCardText className="typedHome">Find me here ... </MDBCardText>

      <MDBCol md="12" className="d-flex justify-content-center">
        <a href="!#" className="px-2 fa-lg li-ic">
          <MDBIcon fab icon="linkedin-in"></MDBIcon>
        </a>

        <a href="!#" className="px-2 fa-lg fb-ic">
          <MDBIcon fab icon="facebook-f"></MDBIcon>
        </a>
      </MDBCol>
      <div>
        <a href="https://github.com/Dara-D" className="px-2 fa-lg fb-ic">
          <img
            hover
            overlay="white-slight"
            className="card-img-top"
            src="https://www.shareicon.net/data/2048x2048/2016/06/20/606964_github_4096x4096.png"
            alt="github"
            width="100px"
          ></img>
        </a>

        <a
          href="https://www.linkedin.com/in/dara-dandashi/"
          className="px-2 fa-lg fb-ic"
        >
          <img
            hover
            overlay="white-slight"
            className="card-img-top"
            src="https://img.pngio.com/linkedin-black-icon-png-image-free-download-searchpngcom-linkedin-black-png-1000_1000.png"
            alt="LinkedIn"
            width="100px"
          ></img>
        </a>

        <a
          href="https://www.instagram.com/dara_dandashi/"
          className="px-2 fa-lg fb-ic"
        >
          <img
            hover
            overlay="white-slight"
            className="card-img-top"
            src="https://www.pngkey.com/png/full/47-475066_graphic-black-and-white-instagram-to-pin-on.png"
            alt="LinkedIn"
            width="100px"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
