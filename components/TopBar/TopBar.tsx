import { AnimatePresence } from 'framer-motion';
import { NextSeo } from 'next-seo';
import SharePopup from '../SharePopup';
import { Bar, Title } from './TopBar.elements';
import { Button } from '../UI';
import useModalControls from '../../hooks/useModalControls';
import { useEditorDocumentContext } from '../../context/editor-document-context';

const TopBar = () => {
  const { isModalOpen, openModal, closeModal } = useModalControls();
  const { title } = useEditorDocumentContext();
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
          {isModalOpen && <SharePopup handleClose={closeModal} />}
        </AnimatePresence>
      </Bar>
    </>
  );
};

export default TopBar;
