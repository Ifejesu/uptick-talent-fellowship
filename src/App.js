import React from "react";
import logo from "./logo.png";
import heroImage from "./banner.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1>Take your software engineering career to the next level.</h1>
          <p>
            Join the Uptick Talent Engineering Fellowship to unlock your
            engineering potential with tailored and individualized training,
            support, and placement into entry-level roles in tech companies.
          </p>
          <a
            href="https://bit.ly/Uptick-Talent-Fellowship"
            className="apply-button"
          >
            APPLY NOW
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default App;
