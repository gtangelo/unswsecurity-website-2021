import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { motion, Variants } from 'framer-motion';

const MobileNavItemWrapper = styled(motion.li)`
  transition: 0.1s all ease;
  color: var(--black);

  &:hover {
    background-color: #ececec;
    transition: 0.2s all ease;
  }
`;

interface MobileNavItemProps {
  name: string;
  href: string;
  variants: Variants;
}

const MobileNavItem = ({ name, href, variants }: MobileNavItemProps) => {
  return (
    <MobileNavItemWrapper variants={variants}>
      <Link to={href}>
        <Typography variant="h6">{name}</Typography>
      </Link>
    </MobileNavItemWrapper>
  );
};

export default MobileNavItem;
