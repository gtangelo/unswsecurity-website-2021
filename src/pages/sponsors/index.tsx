import React from 'react';
import Banner from 'components/Banner';
import PageTemplate from 'templates/PageTemplate';
import sponsorsBannerImg from 'assets/images/secsoc/skylight-talk-2021.jpg';
import SEO from 'components/SEO';
import SponsorshipTiers from 'views/Sponsors/SponsorshipTiers';
import CurrentSponsors from 'views/Sponsors/CurrentSponsors';

const SponsorsPage = () => {
  return (
    <PageTemplate>
      <SEO title="Sponsors" />
      <Banner
        img={sponsorsBannerImg}
        title="Our Sponsors"
        description="Learn more about the amazing companies in the cyber security industry that we work alongside with!"
      />
      <SponsorshipTiers />
      <CurrentSponsors />
    </PageTemplate>
  );
};

export default SponsorsPage;
