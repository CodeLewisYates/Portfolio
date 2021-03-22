import React, { useEffect } from "react";
import "./animation.css";
import { Parallax } from "react-scroll-parallax";

const Header = (props) => {
  useEffect(() => {
    const stars = document.querySelectorAll("#Star");
    stars.forEach((star) => {
      const duration = Math.random() * (2 - 1) + 1;
      star.style.animation = `flash ${duration}s linear infinite alternate`;
    });
  }, []);

  const scrollToAbout = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  const scrollToServices = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <div className="header">
        <Parallax y={[-50, 50]}>
          <h1>
            Hi, I'm <span id="name">Lewis Yates.</span>
            <span id="subname">Nice to meet you!</span>
          </h1>
          {/* <Constellation classN="constellation" /> */}
          <div className="headingbtns">
            <button onClick={scrollToAbout} id="about">
              About me
            </button>
            <button onClick={scrollToServices} id="services">
              Services
            </button>
          </div>
        </Parallax>
      </div>
    </React.Fragment>
  );
};
export default Header;
