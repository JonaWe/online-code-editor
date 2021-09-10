import type { GetServerSideProps } from 'next';
import IFrameDisplay from '../../components/IFrameDisplay';

interface Props {
  id: string;
}

const Page: React.FC<Props> = ({ id }) => {
  return (
    <>
      <h1>{id}</h1>
      <IFrameDisplay
        htmlSrc="<p>hi</p>"
        cssSrc="p{ color: red; }"
        jsSrc="console.log('hi')"
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: { id },
  };
};
