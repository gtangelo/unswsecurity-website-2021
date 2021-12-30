import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme, useMediaQuery } from '@material-ui/core';
import ROUTES from 'data/routes';
import Button from 'components/Button';
import { Link } from 'gatsby';
import MenuToggle from './MenuToggle';
import MobileNavItem from './MobileNavItem';

const Backdrop = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  left: 0px;
  top: 0px;
  display: flex;
  margin-top: var(--navbar-height);
  z-index: 9999;
`;

const MobileNavItemsList = styled(motion.ul)`
  width: 100%;
  > * {
    list-style: none;
    padding: var(--navbar-list-y-padding) var(--navbar-list-x-padding);
  }
`;

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const listVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const ReachOutBtnWrapper = styled(motion.div)`
  color: var(--black);
`;

interface HamburgerMenuProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ isOpen, toggle }: HamburgerMenuProps) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <MenuToggle open={isOpen} toggle={() => toggle((prevState) => !prevState)} />
      <AnimatePresence>
        {!desktop && isOpen && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggle(false)}
          >
            <MobileNavItemsList
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {ROUTES.map((route) => (
                <MobileNavItem
                  name={route.title}
                  href={route.route}
                  key={route.title}
                  variants={listVariants}
                />
              ))}
              <ReachOutBtnWrapper variants={listVariants}>
                <Link to="/join">
                  <Button>Reach Out</Button>
                </Link>
              </ReachOutBtnWrapper>
            </MobileNavItemsList>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
