import React from "react";
import "./App.css";
import Bio from "./Components/Bio";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import NavComponent from "./Components/NavComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavComponent} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Portfolio" component={Projects} />
        <Route path="/Bio" component={Bio} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
