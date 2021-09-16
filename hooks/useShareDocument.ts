import { ObjectId } from 'bson';
import { useState } from 'react';
import { useEditorDocumentContext } from '../context/editor-document-context';
import { AddDocumentResponseType } from '../pages/api/addDocument';

const useShareDocument = () => {
  const { html, css, js, title } = useEditorDocumentContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [id, setId] = useState<ObjectId>();

  const addDocument = async () => {
    setLoading(true);
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, html, css, js }),
    };
    const response = await fetch('/api/addDocument', options);

    const result = (await response.json()) as AddDocumentResponseType;

    if (result.error) {
      setErrorMessage(result.error);
      setLoading(false);
      setFinished(true);
      setSuccessful(false);
    } else {
      setId(result.id);
      setFinished(true);
      setLoading(false);
      setSuccessful(true);
    }
  };

  const reset = () => {
    setLoading(false);
    setErrorMessage('');
    setLoading(false);
    setFinished(false);
    setSuccessful(false);
  };

  return {
    addDocument,
    reset,
    loading,
    finished,
    successful,
    errorMessage,
    id,
  };
};

export default useShareDocument;
