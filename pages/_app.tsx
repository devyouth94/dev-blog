import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import DEFAULT_SEO from 'next-seo-config';

import Layout from 'components/Layout';
import * as gtag from 'lib/utils/gtag';
import 'styles/global.css';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ThemeProvider attribute="class">
        <DefaultSeo {...DEFAULT_SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
}
