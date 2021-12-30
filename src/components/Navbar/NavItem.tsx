import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Route from 'types/Route';
import { FaChevronDown } from 'react-icons/fa';

interface NavItemProps {
  name: string;
  href: string;
  childItems?: Route[];
}

const NavItemWrapper = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;

  & * {
    font-weight: bold !important;
  }
`;

const NavDropdownWrapper = styled.div`
  position: absolute;
  margin-top: 10px;
  left: -20px;
  border-radius: 15px;
  width: 200px;
  background-color: #1b1b1b;
  overflow: hidden;
  transition: all ease 0.3s;
`;

const NavDropdownItem = styled.div`
  padding: 10px 15px;

  &:hover {
    background-color: var(--white);
    color: var(--black);
    transition: all ease 0.3s;
  }
`;

const NavItem = ({ name, href, childItems }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <NavItemWrapper>
      {childItems && childItems.length ? (
        <Typography variant="subtitle2" onClick={() => setOpen((prevState) => !prevState)}>
          {name}
          &nbsp;
          <FaChevronDown />
        </Typography>
      ) : (
        <Link to={href}>
          <Typography variant="subtitle2">{name}</Typography>
        </Link>
      )}
      {open && (
        <NavDropdownWrapper>
          {childItems && childItems.map((route) => (
            <Link to={route.route} key={route.title}>
              <NavDropdownItem>
                <Typography variant="subtitle2">{route.title}</Typography>
              </NavDropdownItem>
            </Link>
          ))}
        </NavDropdownWrapper>
      )}
    </NavItemWrapper>
  );
};

export default NavItem;
