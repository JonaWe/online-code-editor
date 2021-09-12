import { useState } from 'react';
import SharePopup from '../SharePopup';
import { Bar, Title } from './TopBar.elements';
import { Button } from '../UI';

interface TopBarProps {
  initialTitle: string;
}

const TopBar = ({ initialTitle }: TopBarProps) => {
  const [title, setTitle] = useState(initialTitle);
  const shareButton = <Button primary>Share</Button>;
  return (
    <Bar>
      <Title>{title}</Title>
      {/* The Popup component includes the share button*/}
      <SharePopup title={title} setTitle={setTitle} shareButton={shareButton} />
    </Bar>
  );
};

export default TopBar;
