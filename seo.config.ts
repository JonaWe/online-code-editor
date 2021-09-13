import type { NextSeoProps } from 'next-seo';

const title = 'Code Editor';
const description = 'This is a simple online code editor for HTML/ CSS and JS';

const seoConfig: NextSeoProps = {
  title,
  description,
  noindex: false,
  openGraph: {
    title,
    description,
    type: 'website',
  },
};
export default seoConfig;
