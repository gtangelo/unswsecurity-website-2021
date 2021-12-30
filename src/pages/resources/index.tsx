import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import ResourcesList from 'views/Resources/ResourcesList';

const ResourcesPage = () => {
  return (
    <PageTemplate>
      <SEO title="Resources" />
      <ResourcesList />
    </PageTemplate>
  );
};

export default ResourcesPage;
