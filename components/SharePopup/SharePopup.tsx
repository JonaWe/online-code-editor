import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Button } from '../UI';
import { ButtonRow, PopupWrapper, StyledPopup } from './SharePopup.elements';

interface SharePopupProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  shareButton: JSX.Element;
}

const SharePopup = ({ title, setTitle, shareButton }: SharePopupProps) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('share');
  };
  return (
    <StyledPopup modal trigger={shareButton}>
      {(close: any) => (
        <PopupWrapper>
          <h2>Share this editor</h2>
          <form onSubmit={submitHandler}>
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
