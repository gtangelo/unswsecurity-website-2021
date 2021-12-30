import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import Constitution from 'views/About/Constitution';

const ConstitutionPage = () => {
  return (
    <PageTemplate>
      <SEO title="Constitution" />
      <Constitution />
    </PageTemplate>
  );
};

export default ConstitutionPage;
