import Image from "next/image";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import projectimg from "../../assets/project.jpg";
import { motion } from "framer-motion";
const Project = () => {
  const projectCount = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full relative flex overflow-hidden flex-col text-left mb-5 md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap">
        {projectCount.map((project, index): any => {
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={projectimg}
                  alt="project"
                  width="320"
                  height="320"
                />
              </motion.div>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl dark:text-white">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Project
                  </span>
                  {index + 1}
                </h4>

                {/* skills used */}
                <div className="flex items-center justify-center space-x-2">
                  {projectCount.map((item, index) => {
                    return (
                      <Image
                        src={projectimg}
                        alt="project"
                        width="32"
                        height="32"
                      />
                    );
                  })}
                </div>

                {/* project summery */}
                <p className="dark:text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam, cum nobis? Ea id est repudiandae molestiae nobis
                  nesciunt, eveniet nemo facilis minus sint ad qui similique
                  aspernatur, porro ut esse.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Project;
