import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import jira from "../../assets/jira.png";
import next from "../../assets/next.svg";
import tailwind from "../../assets/tailwind.png";
import vscode from "../../assets/vscode.png";
import aws from "../../assets/aws.png";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative flex-col gap-8 text-center md:text-left xl:flex-col
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="top-24 text-center uppercase tracking-[10px] text-gray-500 text-sm">
        Hover on the skills for get info of proficiency{" "}
      </h3>
      <div className="grid grid-cols-4 gap-2 px-2">
        <Skill directionLeft={true} src={html.src} prof="80%" />
        <Skill directionLeft={true} src={css.src} prof="80%" />
        <Skill directionLeft={true} src={js.src} prof="75%" />
        <Skill directionLeft={true} src={react.src} prof="75%" />
        <Skill directionLeft={true} src={next.src} prof="70%" />
        <Skill directionLeft={true} src={tailwind.src} prof="60%" />
        <Skill directionLeft={true} src={bootstrap.src} prof="70%" />
        <Skill directionLeft={true} src={git.src} prof="75%" />
        <Skill directionLeft={true} src={github.src} prof="70%" />
        <Skill directionLeft={true} src={vscode.src} prof="75%" />
        <Skill directionLeft={true} src={jira.src} prof="60%" />
        <Skill directionLeft={true} src={aws.src} prof="50%" />
      </div>
    </motion.div>
  );
};

export default Skills;
