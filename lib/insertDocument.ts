import clientPromise from './mongodb';

const insertDocument = async (
  title: string,
  html: string,
  css: string,
  js: string
) => {
  const client = await clientPromise;
  const db = client.db();
  try {
    const result = await db
      .collection('files')
      .insertOne({ title, html, css, js });
    if (!result.acknowledged) {
      return { error: 'Insert not acknowledged' };
    }
    return { id: result.insertedId };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
export default insertDocument;
