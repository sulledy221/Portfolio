import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="div-header">
      <a href="/" className="li-header">
        Home
      </a>
      <a href="/about" className="li-header">
        About
      </a>
      <a href="/portfolio" className="li-header">
        Projects
      </a>
      <a href="/contact" className="li-header">
        Contact
      </a>
    </div>
  );
}
