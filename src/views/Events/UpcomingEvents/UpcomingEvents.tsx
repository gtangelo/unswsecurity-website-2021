import React, { useState, useEffect } from 'react';
import {
  Box, Container, Grid, Typography,
} from '@material-ui/core';
import { Event, EventResponse } from 'types/Event';
import EventCard from 'components/EventCard';
import styled from 'styled-components';
import { EVENTS_BUCKET_URL, SHOW_UPCOMING_EVENTS_MAX } from 'utils/config';
import axios from 'axios';

const UpcomingEventsSection = styled.section`
  margin: var(--section-margin);
`;

const StayTunedWrapper = styled.div`
  padding: var(--section-margin);
`;

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    const updateEvents = async (): Promise<void> => {
      try {
        const payload = await axios(EVENTS_BUCKET_URL);
        const { events }: EventResponse = payload.data; // eslint-disable-line
        setUpcomingEvents(
          events
            .filter(
              (event: Event) => new Date(event.start).getTime() >= new Date().getTime()
                || new Date(event.end).getTime() >= new Date().getTime(),
            )
            .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
            .slice(0, SHOW_UPCOMING_EVENTS_MAX),
        );
      } catch (e) {
        setUpcomingEvents([]);
      }
    };
    updateEvents().catch((e) => console.log(e));
  }, []);

  return (
    <UpcomingEventsSection id="upcoming-events">
      <Container>
        <Typography align="center" variant="h3" component="h3">
          Upcoming&nbsp;
          <span className="highlight">Events</span>
        </Typography>
        <Typography align="center" variant="body1" component="p">
          We run various CTFs, social and career driven events throughout the year.
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event: Event) => (
              <Grid item key={event.name}>
                <Box my={1}>
                  <EventCard
                    name={event.name}
                    description={event.description}
                    img={event.img}
                    location={event.location}
                    start={event.start}
                    end={event.end}
                    href={event.href}
                  />
                </Box>
              </Grid>
            ))
          ) : (
            <StayTunedWrapper>
              <Typography variant="h6" align="center">
                No upcoming events just yet. Stay tuned on our&nbsp;
                <a href="https://www.facebook.com/unswsecsoc" target="_blank" rel="noreferrer">
                  Facebook page
                </a>
                &nbsp;to keep up to date.
              </Typography>
            </StayTunedWrapper>
          )}
        </Grid>
      </Container>
    </UpcomingEventsSection>
  );
};

export default UpcomingEvents;
