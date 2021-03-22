import React, { useEffect } from "react";
import "./animation.css";
import { Parallax } from "react-parallax";

const Header = (props) => {
  useEffect(() => {
    const stars = document.querySelectorAll("#Star");
    stars.forEach((star) => {
      const duration = Math.random() * (2 - 1) + 1;
      star.style.animation = `flash ${duration}s linear infinite alternate`;
    });
  }, []);

  return (
    <React.Fragment>
      <Parallax strength={-800} blur={{ min: 0, max: 15 }}>
        <div className="header">
          <h1>
            Hi, I'm <span id="name">Lewis Yates.</span>
            <span id="subname">Nice to meet you!</span>
          </h1>
          {/* <Constellation classN="constellation" /> */}
          <div className="headingbtns">
            <button id="about">About me</button>
            <button id="services">Services</button>
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
};
export default Header;
