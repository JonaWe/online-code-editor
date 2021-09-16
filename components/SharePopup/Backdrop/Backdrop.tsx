import { Variants } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { MotionDiv } from './Backdrop.elements';

interface BackdropProps {
  onClick: MouseEventHandler;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <MotionDiv
      onClick={onClick}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </MotionDiv>
  );
};

export default Backdrop;
