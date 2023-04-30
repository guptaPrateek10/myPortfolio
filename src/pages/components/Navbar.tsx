"use client";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import sun from "../../assets/moon.png";
import moon from "../../assets/night-mode.png";
type Props = {};

const socialData = [
  { link: "https://github.com/guptaPrateek10" },
  { link: "https://www.linkedin.com/in/guptaprateek10/" },
  { link: "https://twitter.com/catchmeprateek" },
  { link: "https://www.facebook.com/Catchmeprateek" },
];
const menuData = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "/skills" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];
const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  console.log({ theme });
  return (
    <header className="dark:bg-gray-800 bg-white flex flex-row items-center justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center p-2">
      {/* /Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row"
      >
        {socialData.map((d, i): any => {
          return (
            <div key={i}>
              <SocialIcon
                url={d.link}
                target="_blank"
                bgColor="transparent"
                fgColor="gray"
              />
            </div>
          );
        })}
      </motion.div>
      {/* /menu bar options*/}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row gap-10 text-lg subpixel-antialiased font-semibold	 dark:text-gray-600 cursor-pointer "
      >
        <Image
          // src={`${theme} == "dark" ? sun : , moon`}
          src={theme === "dark" ? sun : moon}
          alt="Toggle button"
          width="32"
          height="32"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {menuData.map((d, i): any => {
          return (
            <div key={i}>
              <Link href={d.link}>{d.title}</Link>
            </div>
          );
        })}
      </motion.div>
    </header>
  );
};

export default Navbar;
