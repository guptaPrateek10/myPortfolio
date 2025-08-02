import React from "react";
import { motion } from "framer-motion";
import mypic from "../../assets/mypic.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex  flex-col  relative h-screen text-center md:text-left md:flex-col sm:flex-col xl:flex-col
    max-w-7xl px-10 justify-evenly mx-auto py-20 gap-8 items-center "
    >
      <h3 className="  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={mypic.src}
        width={150}
        height={150}
        alt="Prateek picture"
        className="-mb-20 md:mb-0  rounded-full object-cover
        flex-shrink-0 w-56 h-56 md:rounded-lg
         md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] "
      />
      <div className="space-y-10 my-12 px-0 md:px-10">
        <h4 className="text-4xl font-semibold my-6 text-gray-500">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50"> Small</span>{" "}
          Background
        </h4>
        <p className="text-base dark: text-gray-500">
          I'm a React JavaScript developer with 4.5 years of experience. As a
          developer, I'm passionate about building responsive, performant, and
          user-friendly web applications using React. I have a strong
          understanding of the React ecosystem, including Redux, React Router,
          and other related technologies. Throughout my career, I've
          collaborated with designers, product owners, and other developers to
          deliver high-quality software products on time and within budget.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
