import { ObjectId } from 'bson';
import type { NextApiRequest, NextApiResponse } from 'next';
import insertDocument from '../../lib/insertDocument';

export const errors = {
  onlyPost: 'only POST request allowed',
  requiredParamsMissing: 'not all required parameters where provided',
  titleLengthInvalid: 'the length of the title is invalid',
  dbInsertFailed: 'DB insertion failed',
};

export interface AddDocumentResponseType {
  error?: string;
  id?: ObjectId;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddDocumentResponseType>
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: errors.onlyPost });
  }

  const data = req.body;

  if (
    !data.title ||
    data.html === undefined ||
    data.css === undefined ||
    data.js === undefined
  ) {
    return res.status(400).send({ error: errors.requiredParamsMissing });
  }

  const { title, html, css, js } = data;

  if (title.length < 3 || title.length > 32) {
    return res.status(400).send({ error: errors.titleLengthInvalid });
  }

  const { error, id } = await insertDocument(title, html, css, js);

  if (error) {
    return res.status(500).send({ error: errors.dbInsertFailed });
  }

  return res.status(200).send({ id });
}
