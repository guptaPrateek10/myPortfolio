import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
import { motion } from "framer-motion";
function SocialContact() {
  const data = SocialData;
  // const glowVariants = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   hover: {
  //     opacity: 1,
  //   },
  // };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: ["20%", "30%", "40", "50%", "60%"],
          opacity: [0.4, 0.5, 0.6, 0.7, 0.8],
        },
        visible: {
          scale: ["80%", "100%", "120%", "80%", "100%"],
          opacity: [0.2, 0.4, 0.6, 0.8, 1],
          transition: {
            delay: 1,
          },
        },
      }}
      className="social-contact"
    >
      {data.map((item) => {
        return (
          <div v>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon" alt="" />
              </div>
            </a>
          </div>
        );
      })}
    </motion.div>
  );
}

export default SocialContact;
