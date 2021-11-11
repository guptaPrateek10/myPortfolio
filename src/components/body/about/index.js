import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am
          <br />
          <span className="info-name">Prateek Gupta.</span>
          <br />I Love Experimenting With Web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="picture"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
