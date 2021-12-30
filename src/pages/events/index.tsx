import Banner from 'components/Banner';
import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import SEO from 'components/SEO';
import eventsBannerImg from 'assets/images/secsoc/wifihacking.jpg';
import EventsBlurb from 'views/Events/EventsBlurb';
import UpcomingEvents from 'views/Events/UpcomingEvents';
import PastEvents from 'views/Events/PastEvents';

const EventsPage = () => {
  return (
    <PageTemplate>
      <SEO title="Events" />
      <Banner
        img={eventsBannerImg}
        title="Our Events"
        description="We run a variety of events from capture the flag competitions to industry talks to social events."
      />
      <EventsBlurb />
      <UpcomingEvents />
      <PastEvents />
    </PageTemplate>
  );
};

export default EventsPage;
