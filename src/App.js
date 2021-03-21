import "./Sass/main.scss";
import React from "react";
import Header from "./Page/Header/Header";
import About from "./Page/About/About";
import Services from "./Page/Services/Services";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
