import React from "react";
import { Parallax } from "react-scroll-parallax";

const About = (props) => {
  return (
    <div className="About">
      <Parallax y={[10, -10]}>
        <h1 className="aboutHeader">About me</h1>
        <p>
          I am a self taught web developer with a passion for creating both
          beautiful and functional websites. I wish to pursue a career in web
          development, and am currently freelancing to provide my clients with
          websites to be proud of! I have experience in developing both the
          front end and back end areas of websites. <br /> <br /> I have been
          interested in programming since secondary school, where I took
          computing as a GCSE and went on to do the same in college. I’ve taken
          several courses from sites such as udemy, however most of my learning
          has been completely self taught. I have developed a variety of skills
          in different programming languages and frameworks to be able to
          develop any site or web app you could think of!{" "}
        </p>
      </Parallax>
    </div>
  );
};

export default About;
