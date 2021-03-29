import "./Sass/main.scss";
import React, { useState, useEffect } from "react";
import Header from "./Page/Header/Header";
import About from "./Page/About/About";
import Github from "./Page/Github/Github";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";
import RocketPreLoad from "./RocketPreload/RocketPreload";
import InfoModal from "./components/infoModal";

const App = () => {
  const [redirect, setRedirect] = useState(false);
  const [hidePreLoad, setHidePreLoad] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("REDIRECT NOW");
      setRedirect(true);
    }, 5500);
    setTimeout(() => {
      setHidePreLoad(true);
    }, 6500);
  }, []);

  const projectClickHandler = (info) => {
    setOpenModal(true);
    setInfo(info);
  };

  useEffect(() => {
    const modal = document.querySelector("#infomodal");
    if (modal)
      modal.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [openModal]);

  const closeModalHandler = () => {
    setOpenModal(false);
    setInfo(null);
  };

  const visitHandler = () => {
    setOpenModal(false);
    setInfo(null);
  };

  return (
    <React.Fragment>
      {hidePreLoad ? null : <RocketPreLoad />}
      {redirect ? (
        <div className="container">
          <Header />
          <About />
          {openModal ? (
            <InfoModal
              info={info}
              close={closeModalHandler}
              visitSite={visitHandler}
            />
          ) : null}
          <Projects clickHandler={(info) => projectClickHandler(info)} />
          <Github />
          <Contact />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default App;
