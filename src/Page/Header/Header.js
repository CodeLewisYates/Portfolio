import React, { useEffect } from "react";
import "./animation.css";
import { Link } from "react-scroll";

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
      <div className="header">
        <h1>
          Hi, I'm <span id="name">Lewis Yates.</span>
          <span id="subname">Nice to meet you!</span>
        </h1>
        {/* <Constellation classN="constellation" /> */}
        <div className="headingbtns">
          <Link to="about" smooth={true}>
            <button>About me</button>
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
