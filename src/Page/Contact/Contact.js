import React from "react";

const Contact = (props) => {
  return (
    <div className="Contact">
      <h1>Get in touch!</h1>

      <p>I'm always happy to hear from people, drop me a message below!</p>
      <p>I am available to work on any projects</p>

      <div className="contactform">
        <input id="contact-name" type="text" placeholder="Name" required />
        <input id="contact-email" type="email" placeholder="Email" required />
        <input
          id="contact-subject"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea id="contact-message" placeholder="Your Message" required />
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
