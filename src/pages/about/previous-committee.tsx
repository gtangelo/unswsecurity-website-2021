import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import PreviousCommittee from 'views/About/PreviousCommittee';

const PreviousCommitteePage = () => {
  return (
    <PageTemplate>
      <SEO title="Previous Committee" />
      <PreviousCommittee />
    </PageTemplate>
  );
};

export default PreviousCommitteePage;
