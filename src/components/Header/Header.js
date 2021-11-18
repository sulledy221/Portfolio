import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="div-header">
      <li className="li-header">
        <a href="/">Home</a>
      </li>
      <li className="li-header">
        <a href="/about">About</a>
      </li>
      <li className="li-header">
        <a href="/portfolio">Projects</a>
      </li>
      <li className="li-header">
        <a href="/contact">Contact</a>
      </li>
    </div>
  );
}
