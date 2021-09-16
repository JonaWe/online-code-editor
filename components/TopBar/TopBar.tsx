import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import SharePopup from '../SharePopup';
import { Bar, Title } from './TopBar.elements';
import { Button } from '../UI';
import useModalControls from '../../hooks/useModalControls';

interface TopBarProps {
  initialTitle: string;
}

const TopBar = ({ initialTitle }: TopBarProps) => {
  const [title, setTitle] = useState(initialTitle);
  const { isModalOpen, openModal, closeModal } = useModalControls();
  return (
    <>
      <NextSeo title={title} />
      <Bar>
        <Title>{title}</Title>

        <Button primary onClick={openModal}>
          Share
        </Button>

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {isModalOpen && (
            <SharePopup
              title={title}
              setTitle={setTitle}
              handleClose={closeModal}
            />
          )}
        </AnimatePresence>
      </Bar>
    </>
  );
};

export default TopBar;
