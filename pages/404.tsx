import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import FourOFour from '../components/UI/404';

const Page: NextPage = () => {
  return (
    <>
      <NextSeo title="404" />
      <FourOFour />
    </>
  );
};

export default Page;
