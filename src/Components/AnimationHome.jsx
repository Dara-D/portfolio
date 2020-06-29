import React from 'react';
import startBtn from './startBtn.svg'
import pc from './pc.svg'
import '../App.css';


const AnimationHome=()=> {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={pc} className="App-startBtn" alt="Start" />
        <p>
          Look around and find what you seek.
        </p>
        <a
          className="bio-link"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about me here!
        </a>
      </header>
    </div>
    
  );
}

export default AnimationHome;
