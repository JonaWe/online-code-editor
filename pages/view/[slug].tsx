import { ObjectId } from 'bson';
import type { GetServerSideProps } from 'next';
import IFrameDisplay from '../../components/IFrameDisplay';
import clientPromise from '../../lib/mongodb';

interface Props {
  htmlSrc: string;
  cssSrc: string;
  jsSrc: string;
  title: string;
  created: number;
}

const Page: React.FC<Props> = ({ htmlSrc, cssSrc, jsSrc, title, created }) => {
  const creationDate = new Date(created);
  const options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const displayDate = creationDate.toLocaleDateString(undefined, options);
  return (
    <>
      <h1>{title}</h1>
      <h2>{displayDate}</h2>
      <IFrameDisplay htmlSrc={htmlSrc} cssSrc={cssSrc} jsSrc={jsSrc} />
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

  const { cssSrc, jsSrc, htmlSrc, title } = srcDocument;
  // get the UTC time of the creation date
  const created = srcDocument.created?.getTime();

  return {
    props: {
      cssSrc,
      jsSrc,
      htmlSrc,
      title,
      created,
    },
  };
};
