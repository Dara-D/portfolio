import React from 'react';
import startBtn from './startBtn.svg'
import pc from './pc.svg'
import '../App.css';
import Typed from 'react-typed';



const AnimationHome=()=> {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={pc} className="App-startBtn" alt="Start" />
        <p className='PHome'>
          Look around and find what you seek.
        </p>
        <a
          className="bio-link"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Because I am ... {'  '}
          <Typed className='typedHome'
          strings={[' an Entrepreneur!', ' an Interior Designer!' , 'and a Web developer!', ]}
          typeSpeed={40}
          backSpeed={30}
          >
          </Typed>
          {/* <p>
          <Typed
          strings={['Here!', 'See...My projects', 'Test...' , 'Do...']}
          typeSpeed={40}
          backSpeed={30}
          loop
          >
          </Typed>
          </p> */}
          {/* Learn More about me here! */}
        </a>
      </header>
    </div>
    
  );
}

export default AnimationHome;
