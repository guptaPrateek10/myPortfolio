import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type Props = {
  directionLeft: boolean;
  src: string;
  prof: string;
};

const Skill = ({ directionLeft, src, prof }: Props) => {
  return (
    <div
      className="group relative  flex cursor-pointer rounded-full w-24 h-24  xl:w-32
    xl:h-32"
    >
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        id="Skills"
        className="rounded-full border icon-mobile border-gray-500 object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div
        className="absolute rounded-full h-24 w-24 opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-black dark:group-hover:bg-white   xl:w-32 xl:h-32 z-0 "
      >
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold  text-white dark:text-black  opacity-100 ">
            {prof}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
