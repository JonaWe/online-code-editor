import { Dispatch, SetStateAction } from 'react';
import { Button } from '../UI';
import { PopupWrapper, StyledPopup } from './SharePopup.elements';

interface SharePopupProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  shareButton: JSX.Element;
}

const SharePopup = ({ title, setTitle, shareButton }: SharePopupProps) => {
  const shareHandler = () => console.log('share');
  return (
    <StyledPopup modal trigger={shareButton}>
      {(close: any) => (
        <PopupWrapper>
          <p>Content</p>
          <Button onClick={close}>Close</Button>

          <Button primary onClick={shareHandler}>
            Share
          </Button>
        </PopupWrapper>
      )}
      {/* <div style={{ background: 'red' }}>Hey</div> */}
    </StyledPopup>
  );
};

export default SharePopup;
