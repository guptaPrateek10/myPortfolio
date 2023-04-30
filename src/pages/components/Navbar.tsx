import { data } from "autoprefixer";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

const socialData = [
  { link: "https://github.com/guptaPrateek10" },
  { link: "https://www.linkedin.com/in/guptaprateek10/" },
  { link: "https://twitter.com/catchmeprateek" },
  { link: "https://www.facebook.com/Catchmeprateek" },
];
const Navbar = (props: Props) => {
  return (
    <header>
      {/* /Social Icons */}
      <div>
        {socialData.map((d, i): any => {
          <SocialIcon
            url={d.link}
            target="_blank"
            bgColor="transparent"
            fgColor="gray"
          />;
        })}
      </div>
      {/* /menu bar options*/}
      <div></div>
    </header>
  );
};

export default Navbar;
