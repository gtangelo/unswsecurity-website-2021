import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface PageTitleItemProps {
  title: string;
  href: string;
}

const PageTitleItemWrapper = styled.li`
  list-style: none;
  text-transform: uppercase;
`;

const PageTitleItem = ({ title, href }: PageTitleItemProps) => {
  return (
    <PageTitleItemWrapper>
      <Link to={href}>
        <Typography variant="subtitle1">{title}</Typography>
      </Link>
    </PageTitleItemWrapper>
  );
};

export default PageTitleItem;
