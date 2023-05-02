import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="fi-rr-edit-alt option-icon">Projects</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi-rr-laptop option-icon">Skills</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i className="fi-rr-briefcase option-icon">Work</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="fi-rr-user option-icon">Contact</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
