import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <a href="mailto:sullivanmort19@gmail.com" className="contact-url">
        My Email
        <br />
        <img src="./gmail.jpeg" alt="Gmail logo" className="logo-img" />
      </a>
      <a href="https://github.com/sulledy221" className="contact-url">
        My Github
        <br />
        <img src="./github.jpeg" alt="Github logo" className="logo-img" />
      </a>
      <a
        href="https://www.linkedin.com/in/sullivan-mortimer/"
        className="contact-url"
      >
        My LinkedIn
        <br />
        <img src="./LI.jpeg" alt="LinkedIn logo" className="logo-img" />
      </a>
    </div>
  );
}
