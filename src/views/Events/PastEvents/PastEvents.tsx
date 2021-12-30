import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Event, EventResponse } from 'types/Event';
import styled from 'styled-components';
import PastEventCard from 'components/PastEventCard';
import { EVENTS_BUCKET_URL, SHOW_PAST_EVENTS_MAX } from 'utils/config';
import axios from 'axios';

const PastEventsSecion = styled.section`
  margin: var(--section-margin);
`;

const StayTunedWrapper = styled.div`
  padding: var(--section-margin);
`;

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const updateEvents = async (): Promise<void> => {
      try {
        const payload = await axios(EVENTS_BUCKET_URL);
        const { events }: EventResponse = payload.data; // eslint-disable-line
        setPastEvents(
          events
            .filter((event: Event) => {
              if (!event.end) return new Date(event.start).getTime() < new Date().getTime();
              return new Date(event.end).getTime() < new Date().getTime();
            })
            .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
            .slice(0, SHOW_PAST_EVENTS_MAX),
        );
      } catch (e) {
        setPastEvents([]);
      }
    };
    updateEvents().catch((e) => console.log(e));
  }, []);

  return (
    <PastEventsSecion>
      <Container>
        <Typography align="center" variant="h3" component="h3">
          Past&nbsp;
          <span className="highlight">Events</span>
        </Typography>
        <Typography align="center" variant="body1" component="p">
          Look through some of our previous events that we hosted.
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="stretch">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <Grid item md={4} sm={6} xs={12} key={event.name}>
                <PastEventCard
                  name={event.name}
                  description={event.description}
                  img={event.img}
                  location={event.location}
                  start={event.start}
                  end={event.end}
                  href={event.href}
                />
              </Grid>
            ))
          ) : (
            <StayTunedWrapper>
              <Typography variant="h6" align="center">
                No past events to show. Stay tuned on our&nbsp;
                <a href="https://www.facebook.com/unswsecsoc" target="_blank" rel="noreferrer">
                  Facebook page
                </a>
                &nbsp;to keep up to date.
              </Typography>
            </StayTunedWrapper>
          )}
        </Grid>
      </Container>
    </PastEventsSecion>
  );
};

export default PastEvents;
