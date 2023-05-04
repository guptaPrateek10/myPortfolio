import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col   
        ${inter.className} snap-y  snap-mandatory z-0   `}
    >
      <Head>
        <title>Prateek's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*Hero Section */}
      <section id="hero" className="snap-start xl:h-[1080px]">
        <Hero />
      </section>
      {/*About */}
      <section id="about" className="snap-center ">
        <About />
      </section>
      {/*Experience */}

      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/*Projects */}

      {/*Resume */}

      {/*Contact */}
    </main>
  );
}
