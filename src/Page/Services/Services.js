import React from "react";

const Services = (props) => {
  return (
    <div className="Services" id="services">
      <h1>Services</h1>
      <p>
        Whether you need a <span>landing page</span>, <span>API</span>,{" "}
        <span>Server Side Rendered</span> site or any other{" "}
        <span>wep application</span>, You're in the right place!
      </p>

      <div className="serviceBox">
        <div className="service landing">
          <h2>Landing Pages</h2>
          <p>Aesthetically pleasing, unique and dynamic landing pages!</p>
        </div>

        <div className="service api">
          <h2>APIs</h2>
          <p>Building and connecting you to your servers and databases!</p>
        </div>

        <div className="service ssr">
          <h2>Server Side Rendered Site</h2>
          <p>
            Multi - page, dynamic sites that pop up on google searches,
            connected to your database!
          </p>
        </div>

        <div className="service seamless">
          <h2>Seamless Experience</h2>
          <p>Priority on creating a seamless, amazing user experience.</p>
        </div>

        <div className="service mobile">
          <h2>Mobile Friendly</h2>
          <p>Ensuring your site is mobile friendly!</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
