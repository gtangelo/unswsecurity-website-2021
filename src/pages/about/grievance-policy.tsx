import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import GrievancePolicy from 'views/About/GrievancePolicy';

const GrievancePolicyPage = () => {
  return (
    <PageTemplate>
      <SEO title="Grievance Policy" />
      <GrievancePolicy />
    </PageTemplate>
  );
};

export default GrievancePolicyPage;
