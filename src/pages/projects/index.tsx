import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Project from "../components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectsPage() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col ${inter.className}`}
    >
      <Head>
        <title>Projects Portfolio | Prateek Gupta - Full Stack Developer</title>
        <meta
          name="description"
          content="Browse through Prateek Gupta's portfolio of full-stack development projects. Featuring web applications, software solutions, and technical implementations using React.js, Node.js, and cloud technologies."
        />
        <meta
          name="keywords"
          content="prateek gupta projects, portfolio projects, web development portfolio, full stack applications, React projects, Node.js projects, TypeScript projects, AWS projects, software development portfolio, technical projects, github projects, development case studies, Prateek Gupta portfolio, web applications, software solutions"
        />
        <meta name="author" content="Prateek Gupta" />
        <link rel="canonical" href="https://iprateek.in/projects" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Projects Portfolio | Prateek Gupta - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore Prateek Gupta's portfolio of innovative full-stack development projects and software solutions. View detailed case studies and technical implementations."
        />
        <meta property="og:url" content="https://iprateek.in/projects" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
      </Head>
      <Project />
    </main>
  );
}
