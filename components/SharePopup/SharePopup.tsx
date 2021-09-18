import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';
import { useEditorDocumentContext } from '../../context/editor-document-context';
import useCountdown from '../../hooks/useCountdown';
import useShareDocument from '../../hooks/useShareDocument';
import { Button } from '../UI';
import Modal from './Modal';
import { ButtonRow, InfoMessage, StyledModal } from './SharePopup.elements';

interface SharePopupProps {
  handleClose(): void;
}

const SharePopup = ({ handleClose }: SharePopupProps) => {
  const router = useRouter();
  const { title, setTitle } = useEditorDocumentContext();
  const [countdown, _, startCountdown] = useCountdown(5, {
    onEnd: closeModalAndChangeRoute,
    customStartTrigger: true,
  });

  const {
    addDocument,
    reset,
    id,
    loading,
    successful,
    finished,
    errorMessage,
  } = useShareDocument();

  useEffect(() => {
    (async () => {
      if (finished && successful && id) {
        // copy share url to clipboard
        const location = window.location;
        const shareUrl = `${location.protocol}//${location.host}/${
          location.pathname.split('/')[0]
        }view/${id}`;
        await navigator.clipboard.writeText(shareUrl);

        // navigation to the new url in 5 seconds
        startCountdown();
      }
    })();
  }, [
    finished,
    successful,
    id,
    router,
    resetDataAndHandleClose,
    startCountdown,
  ]);

  function closeModalAndChangeRoute() {
    resetDataAndHandleClose();

    // switch to the new url
    router.push(`/view/${id}`);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!loading) await addDocument();
  }

  function resetDataAndHandleClose() {
    reset();
    handleClose();
  }

  const infoMessage = (
    <InfoMessage type={successful ? 'SUCCESSFUL' : 'ERROR'}>
      {successful
        ? `Successful! You will be redirected in ${countdown} seconds.`
        : errorMessage}
    </InfoMessage>
  );

  return (
    <Modal handleClose={resetDataAndHandleClose} styledModalDiv={StyledModal}>
      <h2>Share this editor</h2>
      <form onSubmit={handleSubmit}>
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

        {finished && infoMessage}

        <ButtonRow>
          <Button onClick={resetDataAndHandleClose}>Close</Button>
          <Button primary loading={loading} disabled={loading} type="submit">
            Share
          </Button>
        </ButtonRow>
      </form>
    </Modal>
  );
};

export default SharePopup;
