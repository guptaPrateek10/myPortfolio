import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col  
        ${inter.className} snap-y  snap-mandatory z-0  lg:gap-[250px] md:gap-[100px] `}
    >
      <Head>
        <title>Prateek's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*Hero Section */}
      <section id="hero" className="snap-start ">
        <Hero />
      </section>
      {/*About */}
      <section id="about" className="snap-center  ">
        <About />
      </section>
      {/*Experience */}

      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*Projects*/}
      <section id="projects" className="snap-start">
        <Project />
      </section>

      {/*Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
