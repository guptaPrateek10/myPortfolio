import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center px-4">
      <Head>
        <title>404 - Page Not Found | Prateek Gupta</title>
        <meta
          name="description"
          content="The page you're looking for cannot be found. Explore Prateek Gupta's portfolio for web development projects and skills."
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
