import "./Sass/main.scss";
import React, { useState, useEffect } from "react";
import Header from "./Page/Header/Header";
import About from "./Page/About/About";
import Services from "./Page/Services/Services";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";
import RocketPreLoad from "./RocketPreload/RocketPreload";
import { Transition } from "react-transition-group";

const App = () => {
  const [redirect, setRedirect] = useState(false);
  const [hidePreLoad, setHidePreLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("REDIRECT NOW");
      setRedirect(true);
    }, 5500);
    setTimeout(() => {
      setHidePreLoad(true);
    }, 6500);
  }, []);

  return (
    <React.Fragment>
      {hidePreLoad ? null : <RocketPreLoad />}
      {redirect ? (
        <div className="container">
          <Header />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default App;
