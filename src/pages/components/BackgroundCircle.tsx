import { motion } from "framer-motion";
import React from "react";
type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border  border-[#474343] dark:border-[#858383] rounded-full  mobile-circle1 h-[200px] w-[200px] mt-52 animate-ping"></div>
      <div className="absolute border border-[#c7c3c3] dark:border-[#333333] rounded-full mobile-circle2  h-[300px] w-[300px] mt-52"></div>
      <div className="absolute border border-[#c7c3c3] dark:border-[#333333] rounded-full mobile-circle3  h-[450px] w-[450px] mt-52"></div>
      <div
        className="absolute border border-[#7f764c] dark:border-[#f0ce28] rounded-full mobile-circle4  h-[625px] w-[625px] mt-52
      animate-pulse"
      ></div>
      <div className="absolute border border-[#c7c3c3] dark:border-[#333333] rounded-full mobile-circle5  h-[800px] w-[800px] mt-52"></div>
    </motion.div>
  );
};

export default BackgroundCircle;
