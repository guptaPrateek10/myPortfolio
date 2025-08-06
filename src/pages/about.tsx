import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col  ${inter.className} `}
    >
      <Head>
        <title>
          About | Prateek Gupta - Software Engineer, React Developer
        </title>
        <meta
          name="description"
          content="About Prateek Gupta - Senior Software Engineer, React Developer, MCA, Portfolio, Varanasi, Nagpur, Mumbai. Experienced web developer and software engineer."
        />
        <meta
          name="keywords"
          content="prateek gupta portfolio, Prateek gupta, Prateek gupta web developer, Software Engineer, React Developer, Senior Software Engineer, Prateek gupta Varanasi, Prateek gupta MCA, Prateek Gupta Nagpur, web developer, software engineer, full stack developer, javascript developer, mumbai, varanasi, nagpur, MCA, frontend developer, backend developer, nextjs, nodejs, typescript, scalable web applications, system design, LLD, HLD, Prateek Gupta Mumbai, Prateek Gupta India"
        />
        <meta name="author" content="Prateek Gupta" />
        <link rel="canonical" href="https://iprateek.in/about" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="About | Prateek Gupta - Software Engineer, React Developer"
        />
        <meta
          property="og:description"
          content="About Prateek Gupta - Senior Software Engineer, React Developer, MCA, Portfolio, Varanasi, Nagpur, Mumbai. Experienced web developer and software engineer."
        />
        <meta property="og:url" content="https://iprateek.in/about" />
        <meta property="og:image" content="https://iprateek.in/mypic.jpg" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About | Prateek Gupta - Software Engineer, React Developer"
        />
        <meta
          name="twitter:description"
          content="About Prateek Gupta - Senior Software Engineer, React Developer, MCA, Portfolio, Varanasi, Nagpur, Mumbai. Experienced web developer and software engineer."
        />
        <meta name="twitter:image" content="https://iprateek.in/mypic.jpg" />
        <meta name="twitter:site" content="@catchmeprateek" />
        <meta name="twitter:creator" content="@catchmeprateek" />
      </Head>
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
            Results-driven Software Engineer with 4+ years of experience in
            full-stack JavaScript development using MERN stack technologies.
            Currently working as a Software Technologist at CES Limited,
            Chennai, leading development of enterprise-scale applications.
          </p>

          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-gray-500">
              Key Achievements
            </h5>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>
                Developed scalable UI components for K-12 school administration
                platform using Next.js 14
              </li>
              <li>
                Built enterprise-grade decision intelligence platform for
                Fortune 500 clients
              </li>
              <li>
                Led development of cross-platform mobile & web applications for
                Ports America
              </li>
              <li>
                Engineered high-traffic sports platform with real-time updates
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-gray-500">
              Technical Expertise
            </h5>
            <div className="grid grid-cols-2 gap-4 text-gray-500">
              <div>
                <h6 className="font-medium">Frontend:</h6>
                <ul className="list-disc pl-5">
                  <li>React.js, Next.js</li>
                  <li>TypeScript</li>
                  <li>Redux Toolkit</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h6 className="font-medium">Backend:</h6>
                <ul className="list-disc pl-5">
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>REST APIs, GraphQL</li>
                  <li>AWS, Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-gray-500">Education</h5>
            <p className="text-gray-500">MCA from SRKNEC, Nagpur University</p>
          </div>

          <div className="mt-8 py-8">
            <p className="text-gray-500">
              📍 Based in Mumbai, MH
              <br />
              📧{" "}
              <a
                href="mailto:guptaprateek10@gmail.com"
                className="text-blue-500 hover:underline"
              >
                guptaprateek10@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
