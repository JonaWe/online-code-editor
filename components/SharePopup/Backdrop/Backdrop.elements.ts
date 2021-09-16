import styled from 'styled-components';

import { motion } from 'framer-motion';

export const MotionDiv = styled(motion.div)`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  display: grid;
  place-items: center;
`;
