import React from "react";

const Projects = (props) => {
  const redirectUser = (url) => {
    window.location.href = url;
  };

  return (
    <div className="Projects">
      <h1>My Projects</h1>

      <div className="projectsgrid">
        <div
          onClick={() =>
            redirectUser("https://palmtreegetaways.herokuapp.com/getaways")
          }
          className="projectimage palmtree"
        ></div>
        <div
          onClick={() => redirectUser("https://eclaire.netlify.app/")}
          className="projectimage eclaire"
        ></div>
        <div
          onClick={() => redirectUser("https://lewisnatours.herokuapp.com/")}
          className="projectimage natours"
        ></div>
        <div
          onClick={() => redirectUser("https://react-burger-2f085.web.app/")}
          className="projectimage burger"
        ></div>
        <div
          className="projectimage forkify"
          onClick={() => redirectUser("https://lewisapp.netlify.app/")}
        ></div>
        <div className="projectimage chat-app" onClick={() => redirectUser("https://chat-app-ly.netlify.app/")}>
        </div>
      </div>
    </div>
  );
};

export default Projects;
