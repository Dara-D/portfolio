import React, { Component } from "react";
import Typed from "react-typed";

export default class Bio extends Component {
  render() {
    return (
      <div className='BioComp'>
        <p className="PHome">Look around and find what you seek.</p>
        Because I am ... {"  "}
        <Typed
          className="typedHome"
          strings={[
            " an Entrepreneur!",
            " an Interior Designer!",
            "and a Web developer!",
          ]}
          typeSpeed={40}
          backSpeed={30}
          backDelay={50}
        ></Typed>{" "}
      </div>
    );
  }
}
