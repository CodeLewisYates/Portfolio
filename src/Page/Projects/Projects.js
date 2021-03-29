import React from "react";

const concord = {
  title: "Social Media App",
  description:
    "This is a social media app which allows users to sign up, create public posts, comment on posts and like posts.",
  built: "Built using MERN Tech stack with GraphQL and Apollo Client",
  link: "https://concordly.netlify.app/",
};

const chatapp = {
  title: "Chat App",
  description:
    "This is a social chat app, allows users to specify a name and room, the user can then chat to other people in the same room in real time.",
  built: "Built using MERN Tech stack with web sockets using socket.io",
  link: "https://chat-app-ly.netlify.app/",
};

const palmtree = {
  title: "PalmTree Getaways",
  description:
    "Browse getaways fetched from a database for a vacation, select dates to book and pay using stripe integration. Users can view their bookings.",
  built: "Built using MERN Tech stack and stripe integration",
  link: "https://palmtreegetaways.herokuapp.com/",
};

const natours = {
  title: "Natours",
  description:
    "Browse tours, view locations on a dynamic map, pay for the tour using stripe integration, view your bookings!",
  built: "Server side rendered site, using node, express and pug templates",
  link: "https://lewisnatours.herokuapp.com/",
};

const burger = {
  title: "React Burger",
  description:
    "Interactive build-a-burger, users can customize their burger and place an order and view previous orders.",
  built: "Built using React and firebase as the database and authentication.",
  link: "https://react-burger-2f085.web.app/",
};

const forkify = {
  title: "Forkify",
  description:
    "A recipe search where users can easily search for recipes, view the recipes, and bookmark them",
  built:
    "Built using HTML, CSS, JS. Created my own 'virtual dom' which checks what on the page needs updating, just like react. ",
  link: "https://lewisapp.netlify.app/",
};

const eclaire = {
  title: "E'claires Chocolate",
  description:
    "A landing page for a start up company named e'claires chocolate, One of my very first projects!",
  built: "Built using HTML, CSS, Javascript and leaflet API for the map",
  link: "https://eclaire.netlify.app/",
};

const Projects = ({ clickHandler }) => {
  return (
    <div className="Projects" id="projects">
      <h1>My Projects</h1>

      <div className="projectsgrid">
        <div
          onClick={() => clickHandler(concord)}
          className="projectimage concord"
        ></div>
        <div
          onClick={() => clickHandler(palmtree)}
          className="projectimage palmtree"
        ></div>
        <div
          onClick={() => clickHandler(chatapp)}
          className="projectimage chat-app"
        ></div>
        <div
          onClick={() => clickHandler(natours)}
          className="projectimage natours"
        ></div>
        <div
          onClick={() => clickHandler(burger)}
          className="projectimage burger"
        ></div>
        <div
          onClick={() => clickHandler(forkify)}
          className="projectimage forkify"
        ></div>
        <div
          onClick={() => clickHandler(eclaire)}
          className="projectimage eclaire"
        ></div>
      </div>
    </div>
  );
};

export default Projects;
