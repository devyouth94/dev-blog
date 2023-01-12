import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Layout from 'components/Layout';

import 'styles/global.css';
import { DefaultSeo } from 'next-seo';
import DEFAULT_SEO from 'next-seo-config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
