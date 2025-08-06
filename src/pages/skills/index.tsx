import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Skills from "../components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function SkillsPage() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col ${inter.className}`}
    >
      <Head>
        <title>
          Skills & Technologies | Prateek Gupta - Full Stack Developer
        </title>
        <meta
          name="description"
          content="Explore Prateek Gupta's technical expertise in full-stack development. Proficient in React.js, Node.js, TypeScript, AWS, and modern web technologies. View detailed skills and experience."
        />
        <meta
          name="keywords"
          content="prateek gupta skills, technical skills, React.js developer, Node.js developer, TypeScript expert, AWS developer, full stack development, web development skills, JavaScript expertise, MongoDB, Express.js, Next.js, software engineering skills, frontend development, backend development, cloud technologies, system architecture, Prateek Gupta developer skills"
        />
        <meta name="author" content="Prateek Gupta" />
        <link rel="canonical" href="https://iprateek.in/skills" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Skills & Technologies | Prateek Gupta - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Comprehensive overview of Prateek Gupta's technical skills in full-stack development, including React.js, Node.js, TypeScript, and cloud technologies."
        />
        <meta property="og:url" content="https://iprateek.in/skills" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
      </Head>
      <Skills />
    </main>
  );
}
