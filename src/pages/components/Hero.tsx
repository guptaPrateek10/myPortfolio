import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
const mypic = require("../../assets/mypic.jpg");
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [" Prateek Gupta", "a React Developer"],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 50,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-stretch justify-center text-center   ">
      <BackgroundCircle />
      <Image
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        src={mypic}
        alt="Prateek's Photo"
      />
      <div className="z-19">
        <h2 className=" text-sm-uppercase text-gray-500 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold scroll-px-10 ">
          <span className="dark:text-yellow-400 mr-3">Hi, I am {text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
