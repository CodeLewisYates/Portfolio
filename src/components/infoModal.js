import React from "react";

const infoModal = ({ close, visitSite, info }) => {
  return (
    <div className="infoModal-Container">
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <p>{info.built}</p>
      <button onClick={close}>Close</button>
      <a href={`${info.link}`} target="_blank" rel="noreferrer">
        <button>View</button>
      </a>
    </div>
  );
};

export default infoModal;
