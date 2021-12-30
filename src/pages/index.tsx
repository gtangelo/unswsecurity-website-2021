import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import SEO from 'components/SEO';
import Hero from 'views/Home/Hero';
import AboutUsBlurb from 'views/Home/AboutUsBlurb';
import UpcomingEvents from 'views/Events/UpcomingEvents';
import GetInvolved from 'views/Home/GetInvolved';
import OurSponsors from 'views/Home/OurSponsors';

const HomePage = () => {
  return (
    <PageTemplate>
      <SEO />
      <Hero />
      <AboutUsBlurb />
      <UpcomingEvents />
      <GetInvolved />
      <OurSponsors />
    </PageTemplate>
  );
};

export default HomePage;
