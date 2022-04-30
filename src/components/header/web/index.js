import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i className="fi-rr-edit-alt option-icon">Projects</i>
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-laptop option-icon">Skills</i>
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi-rr-briefcase option-icon">Work</i>
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi-rr-user option-icon">Contact</i>
        </a>
      </div>
    </div>
  );
}

export default Web;
