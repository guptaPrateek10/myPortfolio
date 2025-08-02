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
        <title>Prateek Gupta | Software Engineer in Mumbai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Prateek Gupta is a software engineer based in Mumbai, specializing in React.js, React Native, Node.js, MongoDB, SQL, NoSQL, and Tailwind CSS. Experienced in scalable web applications, LLD, HLD, and system design."
        />
        <meta
          name="keywords"
          content="Prateek Gupta, Software Engineer, Mumbai, React.js, Node.js, MongoDB, SQL, NoSQL, Tailwind CSS, Web Developer, Portfolio, System Design, LLD, HLD"
        />
        <meta name="author" content="Prateek Gupta" />
        <link rel="canonical" href="https://iprateek.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prateek Gupta | Software Engineer in Mumbai"
        />
        <meta
          property="og:description"
          content="Prateek Gupta is a software engineer based in Mumbai, specializing in React.js, React Native, Node.js, MongoDB, SQL, NoSQL, and Tailwind CSS."
        />
        <meta property="og:url" content="https://iprateek.in/" />
        <meta property="og:image" content="https://iprateek.in/mypic.jpg" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prateek Gupta | Software Engineer in Mumbai"
        />
        <meta
          name="twitter:description"
          content="Prateek Gupta is a software engineer based in Mumbai, specializing in React.js, React Native, Node.js, MongoDB, SQL, NoSQL, and Tailwind CSS."
        />
        <meta name="twitter:image" content="https://iprateek.in/mypic.jpg" />
        <meta name="twitter:site" content="@catchmeprateek" />
        <meta name="twitter:creator" content="@catchmeprateek" />
        {/* Schema.org JSON-LD for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prateek Gupta",
              url: "https://iprateek.in/",
              image: "https://iprateek.in/mypic.jpg",
              sameAs: [
                "https://www.linkedin.com/in/guptaprateek10/",
                "https://github.com/guptaPrateek10",
                "https://twitter.com/catchmeprateek",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
              address: {
                "@type": "PostalAddress",
                postalCode: "401208",
                addressLocality: "Mumbai",
                addressCountry: "India",
              },
              description:
                "Software engineer based in Mumbai, specializing in React.js, React Native, Node.js, MongoDB, SQL, NoSQL, and Tailwind CSS. Experienced in scalable web applications, LLD, HLD, and system design.",
            }),
          }}
        />
      </Head>

      {/*Hero Section */}
      <section id="hero" className="snap-start ">
        <Hero />
      </section>
      {/*About */}
      <section id="about" className="snap-center  ">
        <About />
      </section>
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
