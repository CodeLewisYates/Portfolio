import React, { useEffect } from "react";
import Constellation from "../../Constellation";
import "./animation.css";

const Header = (props) => {
  useEffect(() => {
    const stars = document.querySelectorAll("#Star");
    const constellation = document.querySelector(`.constellation`);
    stars.forEach((star) => {
      const duration = Math.random() * (4 - 1) + 1;
      star.style.animation = `flash ${duration}s linear infinite alternate`;
    });
  }, []);

  return (
    <div className="header">
      <h1>
        Hi, I'm <span id="name">Lewis Yates.</span>
        <span id="subname">Nice to meet you!</span>
      </h1>
      <h5>LY</h5>
      <Constellation />
      <h2>Web Developer</h2>
      <button id="about">Read about me</button>
      <button id="services">Services</button>
    </div>
  );
};
export default Header;
