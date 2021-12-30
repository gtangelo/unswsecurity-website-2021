import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  Container, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import HamburgerMenu from 'components/HamburgerMenu';
import ROUTES from 'data/routes';
import secsocLogo from 'assets/images/branding/secsoc-logo-white.png';
import Button from 'components/Button';
import NavItem from './NavItem';

const NavbarWrapper = styled.header`
  height: var(--navbar-height);
  width: 100%;
  position: fixed;
  background-color: var(--black);
  color: var(--white);
  z-index: 100;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const NavbarHeader = styled.nav`
  height: var(--navbar-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavHomeLink = styled(Link)`
  height: 30px;
  display: flex;
  align-items: center;
`;

const NavbarLogo = styled.img`
  height: 100%;
  margin-right: 12px;
`;

const NavItemsList = styled.ul`
  all: unset;
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  justify-content: flex-end;
  & > * {
    margin-left: var(--navbar-list-x-padding);
  }
`;

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <NavbarWrapper>
      <Container>
        <NavbarHeader>
          <NavHomeLink to="/" onClick={() => setOpen(false)}>
            <NavbarLogo src={secsocLogo} />
            <Typography variant="h6" component="span">
              /sec/soc
            </Typography>
          </NavHomeLink>
          {desktop ? (
            <NavItemsList>
              {ROUTES.map((route) => (
                <NavItem
                  key={route.title}
                  name={route.title}
                  href={route.route}
                  childItems={route.children}
                />
              ))}
              <Link to="/join">
                <Button>Join Us</Button>
              </Link>
            </NavItemsList>
          ) : (
            <HamburgerMenu isOpen={isOpen} toggle={setOpen} />
          )}
        </NavbarHeader>
      </Container>
    </NavbarWrapper>
  );
};
export default Navbar;
