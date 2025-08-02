"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skillIcons, projectImages } from "../../lib/icons";

// Types
interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
  github: string;
  thumbnails: string[];
}

const ProjectThumbnails = ({
  thumbnails,
  title,
  onHover,
}: {
  thumbnails: string[];
  title: string;
  onHover: (isHovering: boolean) => void;
}) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="flex items-center justify-center space-x-2 flex-wrap"
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    {thumbnails.map((item, index) => (
      <div
        key={index}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => console.log(`Thumbnail ${index + 1} clicked`)}
      >
        <Image
          src={item}
          alt={`${title} thumbnail ${index + 1}`}
          width={100}
          height={100}
          className="rounded-lg shadow-md"
        />
      </div>
    ))}
  </motion.div>
);

const SkillIcons = ({ skills }: { skills: string[] }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="space-y-4"
  >
    <h5 className="text-lg font-semibold text-center text-gray-300">
      Technologies Used
    </h5>
    <div className="flex items-center justify-center space-x-4 flex-wrap">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
          className="group relative flex cursor-pointer rounded-full w-12 h-12 md:w-16 md:h-16"
        >
          <Image
            src={
              skillIcons[skill as keyof typeof skillIcons] ||
              skillIcons["JavaScript"]
            }
            height={20}
            width={20}
            className="rounded-full border border-gray-500 object-cover w-full h-full filter transition duration-300 ease-in-out"
            alt={`${skill} icon`}
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {skill}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ProjectActions = ({
  liveUrl,
  githubUrl,
  onHover,
}: {
  liveUrl: string;
  githubUrl: string;
  onHover: (isHovering: boolean) => void;
}) => {
  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Live Demo button clicked, URL:", liveUrl);

    if (liveUrl && liveUrl.trim() !== "") {
      try {
        window.open(liveUrl, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening live demo URL:", error);
        // Fallback: try to navigate in the same window
        window.location.href = liveUrl;
      }
    } else {
      console.warn("Live demo URL is empty or invalid");
    }
  };

  const handleGithub = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("GitHub button clicked, URL:", githubUrl);

    if (githubUrl && githubUrl.trim() !== "") {
      try {
        window.open(githubUrl, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening GitHub URL:", error);
        // Fallback: try to navigate in the same window
        window.location.href = githubUrl;
      }
    } else {
      console.warn("GitHub URL is empty or invalid");
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="flex space-x-4 relative z-10"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <button
        onClick={handleLiveDemo}
        className="cursor-pointer px-4 py-2 bg-[#f7ab0a] text-black rounded-lg hover:bg-[#f7ab0a]/80 transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#f7ab0a]/50 relative z-20"
        type="button"
        aria-label="Open live demo"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <span>Live Demo</span>
      </button>
      <button
        onClick={handleGithub}
        className="cursor-pointer px-4 py-2 border border-[#f7ab0a] text-[#f7ab0a] rounded-lg hover:bg-[#f7ab0a] hover:text-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#f7ab0a]/50 relative z-20"
        type="button"
        aria-label="Open GitHub repository"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>GitHub</span>
      </button>
    </motion.div>
  );
};

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "prev" ? "left-4" : "right-4"
    } top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer`}
    type="button"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

const DotsIndicator = ({
  totalProjects,
  currentProject,
  onProjectSelect,
}: {
  totalProjects: number;
  currentProject: number;
  onProjectSelect: (index: number) => void;
}) => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {Array.from({ length: totalProjects }).map((_, index) => (
      <button
        key={index}
        onClick={() => onProjectSelect(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
          index === currentProject
            ? "bg-[#f7ab0a] scale-125"
            : "bg-gray-500 hover:bg-gray-400"
        }`}
        type="button"
      />
    ))}
  </div>
);

// Main Component
const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const projects: Project[] = [
    {
      title: "Dev Overflow",
      description:
        "A platform for developers to ask and answer questions, and to learn from each other.Developing a Stack Overflow-like platform using Next.js 14 with server actions. Implemented Tailwind CSS for responsive design and TypeScript for robust typing.",
      image: projectImages.devOverflow.src,
      skills: ["Next.Js", "Node.Js", "Express", "MongoDB", "TailwindCSS"],
      link: "https://dev-overflow-nu-seven.vercel.app/",
      github: "https://github.com/guptaPrateek10/Stack_Overflow_NextJs14",
      thumbnails: [
        projectImages.devOverflowLogin.src,
        projectImages.askQuestions.src,
        projectImages.googleLogin.src,
      ],
    },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, projects.length]);

  // Navigation handlers
  const navigateToProject = (index: number) => {
    setCurrentProject(index);
    pauseAutoPlay();
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    pauseAutoPlay();
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleHover = (hovering: boolean) => {
    setIsHovering(hovering);
  };

  const currentProjectData = projects[currentProject];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
          >
            <div className="max-w-4xl w-full h-full flex flex-col items-center justify-center space-y-6">
              {/* Project Title */}
              <motion.h4
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl md:text-4xl font-semibold text-center"
              >
                <span>{currentProjectData?.title}</span>
              </motion.h4>

              {/* Project Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <Image
                  src={currentProjectData?.image}
                  alt={currentProjectData?.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>

              {/* Project Thumbnails */}
              <ProjectThumbnails
                thumbnails={currentProjectData.thumbnails}
                title={currentProjectData.title}
                onHover={handleHover}
              />

              {/* Skills Section */}
              <SkillIcons skills={currentProjectData.skills} />

              {/* Project Description */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-sm md:text-base text-gray-300 text-center max-w-2xl px-4"
              >
                {currentProjectData.description}
              </motion.p>

              {/* Project Links */}
              <ProjectActions
                liveUrl={currentProjectData.link}
                githubUrl={currentProjectData.github}
                onHover={handleHover}
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <NavigationButton direction="prev" onClick={prevProject} />
        <NavigationButton direction="next" onClick={nextProject} />

        {/* Dots Indicator */}
        <DotsIndicator
          totalProjects={projects.length}
          currentProject={currentProject}
          onProjectSelect={navigateToProject}
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 -z-10"></div>
    </motion.div>
  );
};

export default Project;
