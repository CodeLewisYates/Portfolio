import React from "react";

const Projects = (props) => {
  return (
    <div className="Projects">
      <h1>My Projects</h1>

      <div className="projectsgrid">
        <a
          href="https://palmtreegetaways.herokuapp.com/getaways"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage palmtree"></div>
        </a>
        <a href="https://eclaire.netlify.app/" target="_blank" rel="noreferrer">
          <div className="projectimage eclaire"></div>
        </a>
        <a
          href="https://lewisnatours.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage natours"></div>
        </a>
        <a
          href="https://react-burger-2f085.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage burger"></div>
        </a>
        <a
          href="https://lewisapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage forkify"></div>
        </a>
        <a
          href="https://chat-app-ly.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage chat-app"></div>
        </a>
        <a
          href="https://concordly.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectimage concord"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
