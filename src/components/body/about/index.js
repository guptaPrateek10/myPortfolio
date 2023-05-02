import React from "react";
import SocialContact from "../../common/social-contact/index";
import { motion } from "framer-motion";

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
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={require("../../../assets/coding.png").default}
            className="picture"
            alt=""
          ></motion.img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
