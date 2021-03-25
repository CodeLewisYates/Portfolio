import React from "react";

import emailjs, {init} from "emailjs-com";
init("user_buJZhH5UUKUodXfcoDtPG");

const Contact = (props) => {

  const sendEmail = async () => {
    const fromName = document.querySelector('#fromName').value;
    const fromEmail = document.querySelector('#fromEmail').value;
    const message = document.querySelector('#msg').value;
    const button = document.querySelector('#sendMsgBtn');
    button.textContent = "Sending Email..."
    console.log(fromName);
    const templateParams = {
      to_name: 'Lewis',
      from_name: fromName,
      from_emailAddress: fromEmail,
      message: message,
    };
    const response = await emailjs.send('service_coj5ilt', 'template_ye5dvbc', templateParams);
    if (response.text === "OK") {
      button.textContent = "Email sent!"
      button.style.backgroundColor = '#0fff95';
      setTimeout(() => {
        button.style.backgroundColor = '#ff8552';
        button.textContent="Send Message"
      }, 1000);
    } else {
      button.textContent = "Failed to send!";
      button.style.backgroundColor = 'red';
      setTimeout(() => {
        button.style.backgroundColor = '#ff8552';
        button.textContent="Send Message"
      }, 1000);
    }
  }

  return (
    <div className="Contact">
      <h1>Get in touch!</h1>

      <p>I'm always happy to hear from people, drop me a message below!</p>
      <p>I am available to work on any projects</p>

      <div className="contactform">
        <input id="fromName" type="text" placeholder="Name" required />
        <input id="fromEmail" type="email" placeholder="Email" required />
        <input
          id="contact-subject"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea id="msg" placeholder="Your Message" required />
        <button id="sendMsgBtn" onClick={sendEmail}>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;

// service id service_coj5ilt
// template id template_ye5dvbc
// template params {}
// userID - not required if used init