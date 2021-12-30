import Banner from 'components/Banner';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import teamBannerImg from 'assets/images/secsoc/internal-dinner-2021.jpg';
import SEO from 'components/SEO';
import CommitteeBlurb from 'views/About/CommitteeBlurb';
import Executives from 'views/About/Executives';
import Portfolios from 'views/About/Portfolios';

const TeamPage = () => {
  return (
    <PageTemplate>
      <SEO title="Our Team" />
      <Banner
        img={teamBannerImg}
        title="Our Team"
        description="Meet the wonderful team that keeps the society running behind the scenes."
      />
      <CommitteeBlurb />
      <Executives />
      <Portfolios />
    </PageTemplate>
  );
};

export default TeamPage;
