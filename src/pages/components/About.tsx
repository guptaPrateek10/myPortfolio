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
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={mypic.src}
        width={300}
        height={300}
        alt="Prateek picture"
        className="-mb-20 md:mb-0  rounded-full object-cover
        flex-shrink-0 w-56 h-56 md:rounded-lg
         md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50"> Small</span>{" "}
          Background
        </h4>
        <p className="text-base">
          I'm a React JavaScript developer with 2.5 years of experience. As a
          developer, I'm passionate about building responsive, performant, and
          user-friendly web applications using React. I have a strong
          understanding of the React ecosystem, including Redux, React Router,
          and other related technologies. I'm also comfortable working with
          other front-end technologies such as HTML, CSS, and JavaScript.
          Throughout my career, I've collaborated with designers, product
          owners, and other developers to deliver high-quality software products
          on time and within budget. I'm comfortable working in an Agile
          development environment and I value clear communication, team
          collaboration, and a focus on delivering value to the end-user. In
          addition to my technical skills, I'm a lifelong learner who's always
          looking to improve my skills and stay up-to-date with the latest
          industry trends. I'm also a strong problem solver who enjoys tackling
          complex challenges and finding elegant solutions.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
