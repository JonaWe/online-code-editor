import { useRouter } from 'next/router';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useEditorDocumentContext } from '../../context/editor-document-context';
import { Button } from '../UI';
import { ButtonRow, PopupWrapper, StyledPopup } from './SharePopup.elements';

interface SharePopupProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  shareButton: JSX.Element;
}

const SharePopup = ({ title, setTitle, shareButton }: SharePopupProps) => {
  const { html, css, js } = useEditorDocumentContext();
  const [successful, setSuccessful] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const submitHandler = (close: any) => {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
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
        setTimeout(() => {
          close();
          setSuccessful(undefined);
          setErrorMessage('');
          router.push(`/view/${id}`);
        }, 5000);
      }
    };
  };

  let infoMessage: JSX.Element;

  if (successful === true) {
    infoMessage = (
      <span>
        Successful! You will be automatically redirected in five seconds.
      </span>
    );
  } else if (successful === false) {
    infoMessage = <span>Failed: {errorMessage}</span>;
  }

  return (
    <StyledPopup modal trigger={shareButton}>
      {(close: any) => (
        <PopupWrapper>
          <h2>Share this editor</h2>
          <form onSubmit={submitHandler(close)}>
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
              <Button onClick={close}>Close</Button>
              <Button primary type="submit">
                Share
              </Button>
            </ButtonRow>
          </form>
        </PopupWrapper>
      )}
      {/* <div style={{ background: 'red' }}>Hey</div> */}
    </StyledPopup>
  );
};

export default SharePopup;
