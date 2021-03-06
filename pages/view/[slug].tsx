import { ObjectId } from 'bson';
import type { GetServerSideProps } from 'next';
import Controller from '../../components/Controller';
import clientPromise from '../../lib/mongodb';

interface Props {
  html: string;
  css: string;
  js: string;
  title: string;
}

const Page: React.FC<Props> = ({ html, css, js, title }) => {
  return (
    <>
      <Controller
        initialHTML={html}
        initialCSS={css}
        initialJS={js}
        initialTitle={title}
      />
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug: id } = context.query;

  // redirect to 404 page if the slug is not a valid ObjectId
  if (typeof id !== 'string' || id.length !== 24) {
    return {
      notFound: true,
    };
  }

  const client = await clientPromise;
  const db = client.db();
  const srcDocument = await db.collection('files').findOne(new ObjectId(id));

  // if the ObjectId was not found in the db redirect to 404 page
  if (!srcDocument) {
    return { notFound: true };
  }

  const { css, js, html, title } = srcDocument;

  return {
    props: {
      css,
      js,
      html,
      title,
    },
  };
};
