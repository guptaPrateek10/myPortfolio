import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "./components/Hero";
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
        <div
          className="flex  flex-col  relative h-screen text-center md:text-left md:flex-col sm:flex-col xl:flex-col
    max-w-7xl px-10 justify-evenly mx-auto py-20 gap-8 items-center "
        >
          <h3 className="  uppercase tracking-[20px] text-gray-500 text-2xl">
            About
          </h3>
          <Image
            src="/mypic.jpg"
            width={150}
            height={150}
            alt="Prateek picture"
            className="-mb-20 md:mb-0  rounded-full object-cover
        flex-shrink-0 w-56 h-56 md:rounded-lg
         md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] "
          />
          <div className="space-y-10 my-12 px-0 md:px-10">
            <h4 className="text-4xl font-semibold my-6 text-gray-500">
              Here is a{" "}
              <span className="underline decoration-[#f7ab0a]/50"> Small</span>{" "}
              Background
            </h4>
            <p className="text-base dark: text-gray-500">
              I'm a React JavaScript developer with 4.5 years of experience. As
              a developer, I'm passionate about building responsive, performant,
              and user-friendly web applications using React. I have a strong
              understanding of the React ecosystem, including Redux, React
              Router, and other related technologies. Throughout my career, I've
              collaborated with designers, product owners, and other developers
              to deliver high-quality software products on time and within
              budget.
            </p>
          </div>
        </div>
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
