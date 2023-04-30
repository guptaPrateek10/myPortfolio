import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`dark:bg-gray-800 bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Prateek's Portfolio</title>
      </Head>

      {/*Hero Section */}

      {/*Skills */}

      {/*Projects */}

      {/*Resume */}

      {/*Contact */}
    </main>
  );
}
