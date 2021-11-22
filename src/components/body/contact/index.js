import React from "react";
//hello
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";
function Contect() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left"></div>
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
        <div className="download">
          <a
            download
            href={require("../../../assets/Resume/RESUME.pdf").default}
          >
            <i className="fi-rr-cloud-download download-icon"></i>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contect;
