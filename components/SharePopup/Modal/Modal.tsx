import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  MotionStyle,
  Variants,
} from 'framer-motion';
import { MouseEventHandler } from 'react';
import { DefaultTheme, StyledComponent } from 'styled-components';
import Backdrop from '../Backdrop';

interface ModalProps {
  handleClose: MouseEventHandler;
  styledModalDiv: StyledComponent<
    ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>,
    DefaultTheme,
    {},
    never
  >;
}

const dropIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 30,
      stiffness: 600,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const Modal: React.FC<ModalProps> = ({
  handleClose,
  children,
  styledModalDiv,
}) => {
  const CustomMotionDiv = styledModalDiv || motion.div;
  return (
    <Backdrop onClick={handleClose}>
      <CustomMotionDiv
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </CustomMotionDiv>
    </Backdrop>
  );
};
export default Modal;
