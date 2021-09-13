import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { DefaultSeo } from 'next-seo';
import seoProps from '../seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoProps} />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
