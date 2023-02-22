import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko" className="scroll-smooth">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <meta
          name="google-site-verification"
          content="p15ksZCsN_bZNG0qLoBHODbLqGysOQMu884I02V2ebM"
        />
      </Head>

      <body className="bg-gray-50 text-gray-900 dark:bg-neutral-800 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
