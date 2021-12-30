import Banner from 'components/Banner';
import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import aboutBannerImg from 'assets/images/secsoc/wifihacking.jpg';

const AboutPage = () => {
  return (
    <PageTemplate>
      <SEO title="About" />
      <Banner
        img={aboutBannerImg}
        title="About Us"
        description="We are a community of security enthusiasts!"
      />
    </PageTemplate>
  );
};

export default AboutPage;
