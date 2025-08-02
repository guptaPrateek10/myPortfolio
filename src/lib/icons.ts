// Skill Icons
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import jira from "../assets/jira.png";
import next from "../assets/next.svg";
import tailwind from "../assets/tailwind.png";
import vscode from "../assets/vscode.png";
import aws from "../assets/aws.png";
import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongo from "../assets/mongo.png";

// Project Images
import devOverflow from "../assets/dev-overflow/dev-overflow.png";
import devOverflowLogin from "../assets/dev-overflow/login.png";
import askQuestions from "../assets/dev-overflow/askQuestions.png";
import googleLogin from "../assets/dev-overflow/googleLogin.png";

// UI Icons
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import nightMode from "../assets/night-mode.png";

// Other Assets
import mypic from "../assets/mypic.jpg";
import project from "../assets/project.jpg";
import reactsvg from "../assets/reactsvg.svg";

// Skill Icons Mapping
export const skillIcons = {
  "Next.Js": next,
  "Node.Js": node,
  Express: express,
  MongoDB: mongo,
  TailwindCSS: tailwind,
  React: react,
  JavaScript: js,
  HTML: html,
  CSS: css,
  Bootstrap: bootstrap,
  Git: git,
  GitHub: github,
  Jira: jira,
  AWS: aws,
  "VS Code": vscode,
} as const;

// Project Images
export const projectImages = {
  devOverflow,
  devOverflowLogin,
  askQuestions,
  googleLogin,
} as const;

// UI Icons
export const uiIcons = {
  moon,
  sun,
  nightMode,
} as const;

// Other Assets
export const otherAssets = {
  mypic,
  project,
  reactsvg,
} as const;

// Individual exports for direct access
export {
  // Skill Icons
  js,
  react,
  css,
  bootstrap,
  git,
  github,
  html,
  jira,
  next,
  tailwind,
  vscode,
  aws,
  mongo,
  node,
  express,

  // Project Images
  devOverflow,
  devOverflowLogin,
  askQuestions,
  googleLogin,

  // UI Icons
  moon,
  sun,
  nightMode,

  // Other Assets
  mypic,
  project,
  reactsvg,
};

// Type definitions for better TypeScript support
export type SkillIconKey = keyof typeof skillIcons;
export type ProjectImageKey = keyof typeof projectImages;
export type UIIconKey = keyof typeof uiIcons;
export type OtherAssetKey = keyof typeof otherAssets;
