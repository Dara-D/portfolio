import React from "react";
import cv from "./CV.pdf";
import github from "./github.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";

const Contact = () => {
  return (
    <div className="ContactComp">
      <img
        className="myImg"
        hover
        overlay="white-slight"
        src="https://scontent.fist7-1.fna.fbcdn.net/v/t1.0-9/s960x960/59627672_10157372621791941_8782890533258264576_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=N-ajWBjhldAAX9fI-NB&_nc_ht=scontent.fist7-1.fna&_nc_tp=7&oh=4fdace64c91d87063c683e5da615da8d&oe=5F3B995A"
        alt="Dara"
        width="100px"
      ></img>

      <div className="midPart">
        <h2 className="text">Find me here ... </h2>

        <a href={cv} target="_blank">
          <button color="unique">View my CV</button>
        </a>
      </div>
      <div className="socialMedia">
        <a href="https://github.com/Dara-D" target="_blank">
          <img src={github} alt="github" width="60px"></img>
        </a>

        <a href="https://www.linkedin.com/in/dara-dandashi/" target="_blank">
          <img src={facebook} alt="Facebook" width="60px"></img>
        </a>

        <a href="https://www.instagram.com/dara_dandashi/" target="_blank">
          <img src={linkedin} alt="LinkedIn" width="60px"></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
