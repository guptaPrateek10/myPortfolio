import React from "react";
import "./skill-card.css";
import { motion } from "framer-motion";
function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.6, 1.2],
        rotate: [0, 2, -2, 0],
        transition: {
          duration: 0.2,
        },
      }}
      className="skill-card"
    >
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill">{skill.name}</label>
    </motion.div>
  );
}

export default SkillCard;
