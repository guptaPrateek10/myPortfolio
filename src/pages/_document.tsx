import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Viewport Meta Tag for Responsive Design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* Default Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Default SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1F2937" />

        {/* Social Media Integration */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prateek Gupta Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@catchmeprateek" />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prateek Gupta",
              url: "https://iprateek.in",
              sameAs: [
                "https://github.com/guptaPrateek10",
                "https://www.linkedin.com/in/guptaprateek10/",
                "https://twitter.com/catchmeprateek",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Independent Developer",
              },
            }),
          }}
        />

        {/* Compression and Caching Headers */}
        <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
