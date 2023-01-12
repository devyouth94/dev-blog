import METADATA from 'constants/METADATA';
import { DefaultSeoProps } from 'next-seo';

const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${METADATA.headerTitle}`,
  defaultTitle: METADATA.meta.title,
  description: METADATA.meta.description,
  canonical: METADATA.meta.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: METADATA.meta.url,
    siteName: METADATA.meta.title,
    images: [
      {
        url: `${METADATA.meta.url}/images/og_image.png`,
        width: 850,
        height: 600,
        alt: METADATA.headerTitle,
      },
    ],
  },
};

export default DEFAULT_SEO;
