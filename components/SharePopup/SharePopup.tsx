import { useRouter } from 'next/router';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useEditorDocumentContext } from '../../context/editor-document-context';
import { Button } from '../UI';
import Modal from './Modal';
import { ButtonRow, InfoMessage, StyledModal } from './SharePopup.elements';

interface SharePopupProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  handleClose(): void;
}

const SharePopup = ({ title, setTitle, handleClose }: SharePopupProps) => {
  const { html, css, js } = useEditorDocumentContext();
  const [successful, setSuccessful] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const submitHandler = () => {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (successful !== undefined) return;
      const response = await fetch('/api/addDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, html, css, js }),
      });

      const result = await response.json();

      if (result.error) {
        setSuccessful(false);
        setErrorMessage(result.error);
      } else {
        setSuccessful(true);
        const { id } = result;

        // copy share url to clipboard
        const location = window.location;
        const shareUrl = `${location.protocol}//${location.host}/${
          location.pathname.split('/')[0]
        }view/${id}`;
        await navigator.clipboard.writeText(shareUrl);

        // switch to the new url
        router.push(`/view/${id}`);

        setTimeout(async () => {
          // reset everything back to the initial state
          handleClose();
          setSuccessful(undefined);
          setErrorMessage('');
        }, 3000);
      }
    };
  };

  let infoMessage: JSX.Element | undefined;

  if (successful === true) {
    infoMessage = (
      <InfoMessage type="SUCCESSFUL">
        Successful! Link copied to clipboard.
      </InfoMessage>
    );
  } else if (successful === false) {
    infoMessage = (
      <InfoMessage type="ERROR">Error: {errorMessage}!</InfoMessage>
    );
  }

  return (
    <Modal handleClose={handleClose} styledModalDiv={StyledModal}>
      <h2>Share this editor</h2>
      <form onSubmit={submitHandler()}>
        <label htmlFor="title">
          Titel
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={32}
            minLength={3}
            required
          />
        </label>

        {infoMessage}

        <ButtonRow>
          <Button onClick={handleClose}>Close</Button>
          <Button primary type="submit">
            Share
          </Button>
        </ButtonRow>
      </form>
    </Modal>
  );
};

export default SharePopup;
