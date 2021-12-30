import { Box, Container, Typography } from '@material-ui/core';
import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';

const TypographyView = () => {
  return (
    <PageTemplate>
      <SEO title="Typography" />
      <Container>
        <Box p={5}>
          <Typography variant="h1">Heading One</Typography>
          <Typography variant="h2">Heading Two</Typography>
          <Typography variant="h3">Heading Three</Typography>
          <Typography variant="h4">Heading Four</Typography>
          <Typography variant="h5">Heading Five</Typography>
          <Typography variant="h6">Heading Six</Typography>
          <Typography variant="subtitle1">Subtitle One</Typography>
          <Typography variant="subtitle2">Subtitle Two</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur reiciendis
            voluptates cum at, a, nemo explicabo laudantium temporibus veniam et autem, nisi beatae
            sequi ea excepturi architecto adipisci nostrum ut?
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quis sequi, impedit,
            suscipit ab laborum accusantium saepe fugit soluta nemo necessitatibus reprehenderit
            repellat molestias, voluptas perferendis vero eaque dolorem! Aut!
          </Typography>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default TypographyView;
