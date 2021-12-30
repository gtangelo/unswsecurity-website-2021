import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { Container, Typography } from '@material-ui/core';
import SEO from 'components/SEO';

const NotFoundWrapper = styled.section`
  min-height: calc(var(--content-height) - var(--navbar-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NotFoundPage = () => (
  <PageTemplate>
    <SEO title="404 - Page Not Found" />
    <NotFoundWrapper>
      <Container>
        <Typography variant="h5" align="center">
          404: Page Not Found
        </Typography>
        <Typography variant="h6" align="center">
          Beep. Boop.
        </Typography>
        <Typography variant="subtitle1" align="center">
          You've hit the void. Click&nbsp;
          <Link to="/">here</Link>
          &nbsp;to go back to the website!
        </Typography>
      </Container>
    </NotFoundWrapper>
  </PageTemplate>
);

export default NotFoundPage;
