import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

interface PathProps {
  d?: string;
}

const Path = (props: MotionProps & PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--white)"
    strokeLinecap="square"
    {...props}
  />
);

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: transparent;
  z-index: 1;
`;

export type NavToggleProps = {
  toggle: () => void;
  open: boolean;
};

const MenuToggle = ({ toggle, open }: NavToggleProps) => (
  <StyledButton onClick={toggle}>
    <svg width="30" height="30" viewBox="0 0 40 40">
      <Path
        variants={{
          closed: { d: 'M 4 5 L 40 5' },
          open: { d: 'M 6 33 L 34 5' },
        }}
        animate={open ? 'open' : 'closed'}
      />
      <Path
        d="M 4 18.846 L 40 18.846"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={open ? 'open' : 'closed'}
      />
      <Path
        variants={{
          closed: { d: 'M 4 32.692 L 40 32.692' },
          open: { d: 'M 6 5 L 34 32.692' },
        }}
        animate={open ? 'open' : 'closed'}
      />
    </svg>
  </StyledButton>
);

export default MenuToggle;
