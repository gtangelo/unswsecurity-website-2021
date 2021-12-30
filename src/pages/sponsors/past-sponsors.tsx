import React from 'react';
import Banner from 'components/Banner';
import PageTemplate from 'templates/PageTemplate';
import pastSponsorsBannerImg from 'assets/images/secsoc/skylight-talk-2021.jpg';
import SEO from 'components/SEO';
import PastSponsors from 'views/Sponsors/PastSponsors';

const PastSponsorsPage = () => {
  return (
    <PageTemplate>
      <SEO title="Past Sponsors" />
      <Banner
        img={pastSponsorsBannerImg}
        title="Past Sponsors"
        description="Learn more about the amazing companies in the cyber security industry that we work alongside with!"
      />
      <PastSponsors />
    </PageTemplate>
  );
};

export default PastSponsorsPage;
