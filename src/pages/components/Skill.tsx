import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  directionLeft: boolean;
  src: string;
  prof: string;
};

const Skill = ({ directionLeft, src, prof }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      id="Skills"
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer rounded-full w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 "
    >
      <Image
        src={src}
        height={20}
        width={20}
        className="rounded-full border border-gray-500 object-cover w-full h-full filter group-hover:grayscale transition duration-300 ease-in-out"
        alt="skill-icon"
      />
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-black dark:group-hover:bg-white z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-white dark:text-black opacity-100">
            {prof}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
