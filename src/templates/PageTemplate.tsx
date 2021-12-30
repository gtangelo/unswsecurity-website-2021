import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Helmet from 'react-helmet';
import ThemeProvider from 'components/ThemeProvider';
import styled from 'styled-components';

interface PageTemplateProps {
  children: React.ReactNode;
}

const Page = styled.div`
  main {
    padding-top: var(--navbar-height);
    min-height: var(--content-height);
  }
`;
const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <ThemeProvider>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Navbar />
      <Page>
        <main>{children}</main>
      </Page>
      <Footer />
    </ThemeProvider>
  );
};

export default PageTemplate;
