import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { skillIcons } from "../../lib/icons";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative flex-col gap-8 text-center md:text-left xl:flex-col
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto mt-6 mb-6 items-center"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="top-24 text-center uppercase tracking-[10px] text-gray-500 text-sm">
        Hover on the skills for get info of proficiency{" "}
      </h3>
      {/* // center the grid items */}
      <div className="grid grid-cols-4  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 items-center justify-items-center sm:gap-6 gap-2 px-2 mx-auto">
        <Skill directionLeft={true} src={skillIcons.HTML.src} prof="80%" />
        <Skill directionLeft={true} src={skillIcons.CSS.src} prof="80%" />
        <Skill
          directionLeft={true}
          src={skillIcons.JavaScript.src}
          prof="85%"
        />
        <Skill directionLeft={true} src={skillIcons.React.src} prof="90%" />
        <Skill
          directionLeft={true}
          src={skillIcons["Next.Js"].src}
          prof="80%"
        />
        <Skill
          directionLeft={true}
          src={skillIcons.TailwindCSS.src}
          prof="80%"
        />
        <Skill directionLeft={true} src={skillIcons.Bootstrap.src} prof="90%" />
        <Skill directionLeft={true} src={skillIcons.Git.src} prof="95%" />
        <Skill directionLeft={true} src={skillIcons.GitHub.src} prof="80%" />
        <Skill
          directionLeft={true}
          src={skillIcons["VS Code"].src}
          prof="90%"
        />
        <Skill directionLeft={true} src={skillIcons.Jira.src} prof="90%" />
        <Skill directionLeft={true} src={skillIcons.AWS.src} prof="70%" />
      </div>
    </motion.div>
  );
};

export default Skills;
