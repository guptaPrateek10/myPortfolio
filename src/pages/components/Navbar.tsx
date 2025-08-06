"use client";
import { data } from "autoprefixer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { useRouter } from "next/navigation";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const socialData = [
  { link: "https://github.com/guptaPrateek10" },
  { link: "https://www.linkedin.com/in/guptaprateek10/" },
  { link: "https://twitter.com/catchmeprateek" },
  { link: "https://www.facebook.com/Catchmeprateek" },
];
const menuData = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skills" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];
const Navbar = (props: Props) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  return (
    <header className="dark:bg-gray-800 relative bg-white  flex flex-row items-center justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center p-2 ">
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
          // Add rel and aria-label for SEO and accessibility
          let label = "";
          if (d.link.includes("github")) label = "GitHub";
          else if (d.link.includes("linkedin")) label = "LinkedIn";
          else if (d.link.includes("twitter")) label = "Twitter";
          else if (d.link.includes("facebook")) label = "Facebook";
          return (
            <div key={i}>
              <SocialIcon
                url={d.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                bgColor="transparent"
                fgColor="gray"
              />
            </div>
          );
        })}
      </motion.div>
      {/* /menu bar options*/}
      <div className="flex gap-6">
        <Image
          // src={`${theme} == "dark" ? sun : , moon`}
          className="mx-auto my-auto cursor-pointer"
          src={theme === "dark" ? sun : theme === undefined ? sun : moon}
          alt="Toggle button"
          width="32"
          height="32"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
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
          className="flex flex-row gap-10 text-lg subpixel-antialiased font-semibold	 dark:text-gray-500 text-gray-500 cursor-pointer web"
        >
          {menuData.map((d, i): any => {
            return (
              <div key={i}>
                <Link
                  // onClick={() => router.push(`${d.link}`)}
                  scroll={false}
                  href={`${d.link}`}
                >
                  {d.title}
                </Link>
              </div>
            );
          })}
        </motion.div>
        <Bars4Icon
          className="h-12 w-12 text-[#808080] mobile group-hover:bg-[#f7ab0a] cursor-pointer"
          onClick={() => {
            setisOpenMenu(!isOpenMenu);
          }}
        />

        {isOpenMenu && (
          <div className="flex flex-col justify-center items-center absolute top-0 right-0 gap-10 text-2xl z-99 subpixel-antialiased dark:bg-slate-700 bg-white  w-2/4  h-screen font-semibold	 dark:text-gray-500 cursor-pointer ">
            <XMarkIcon
              className="h-16 w-16 absolute top-2 right-0 text-[#808080] mobile group-hover:bg-[#f7ab0a] cursor-pointer"
              onClick={() => {
                setisOpenMenu(!isOpenMenu);
              }}
            />

            {menuData.map((d, i): any => {
              return (
                <div key={i}>
                  <Link
                    scroll={false}
                    href={`${d.link}`}
                    className="dark:text-gray-500 text-gray-500"
                  >
                    {d.title}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
