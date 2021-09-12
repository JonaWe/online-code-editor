import { useState } from 'react';
import { Bar, Title } from './TopBar.elements';

interface TopBarProps {
  initialTitle: string;
}

const TopBar = ({ initialTitle }: TopBarProps) => {
  const [title, setTitle] = useState(initialTitle);
  return (
    <Bar>
      <Title>{title}</Title>
    </Bar>
  );
};

export default TopBar;
