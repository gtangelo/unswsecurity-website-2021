import Banner from 'components/Banner';
import SEO from 'components/SEO';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import joinUsBannerImg from 'assets/images/secsoc/bsides-bus-2021.png';
import JoinUs from 'views/Join/JoinUs';

const ContactPage = () => {
  return (
    <PageTemplate>
      <SEO title="Get Involved" />
      <Banner
        img={joinUsBannerImg}
        title="Get Involved"
        description="Interested in the UNSW Security Society? Find out how you can be involved!"
      />
      <JoinUs />
    </PageTemplate>
  );
};

export default ContactPage;
