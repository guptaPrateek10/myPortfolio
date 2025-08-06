import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white h-screen flex flex-col ${inter.className}`}
    >
      <Head>
        <title>Contact | Prateek Gupta - Full Stack Developer</title>
        <meta
          name="description"
          content="Contact Prateek Gupta for full-stack development opportunities, technical consultations, or project collaborations. Based in Mumbai, India. Available for remote work globally."
        />
        <meta
          name="keywords"
          content="contact prateek gupta, hire full stack developer, web development consultation, software engineer contact, professional inquiry, React developer contact, Node.js developer contact, hire developer Mumbai, contact software engineer, technical consultation, project collaboration, remote developer, Prateek Gupta contact"
        />
        <meta name="author" content="Prateek Gupta" />
        <link rel="canonical" href="https://iprateek.in/contact" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Contact | Prateek Gupta - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Get in touch with Prateek Gupta for full-stack development opportunities, technical consultations, or project collaborations. Based in Mumbai, India."
        />
        <meta property="og:url" content="https://iprateek.in/contact" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
      </Head>
      <Contact />
    </main>
  );
}
