import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import NewslettersList from 'views/Publications/NewslettersList';

const NewslettersPage = () => {
  return (
    <PageTemplate>
      <SEO title="Newsletters" />
      <NewslettersList />
    </PageTemplate>
  );
};

export default NewslettersPage;
