import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const EventsBlurbSection = styled.section`
  margin: var(--section-margin);
`;

const EventTypesWrapper = styled.div`
  margin: var(--section-margin);
`;

const eventTypesContent = [
  {
    title: 'CTFs',
    content:
      'We run our own CTF competitions where members can participate in to undertake security based challenges such as deciphering codes, reverse software and break encryption.',
  },
  {
    title: 'Careers',
    content:
      'We run career orientated events such as workshops or talks to better inform students about cyber security within the industry.',
  },
  {
    title: 'Socials',
    content:
      'We run social events such as our movie nights or study sessions to foster a community of security enthusiasts.',
  },
];

const EventsBlurb = () => {
  return (
    <EventsBlurbSection>
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          Our&nbsp;
          <span className="highlight">Events</span>
        </Typography>
        <Typography variant="body1" align="center">
          At the UNSW Security Society, we run various events throughout the year ranging from
          social to career orientated events. We hope to create events that foster a community that
          security enthisiasts may enjoy!
        </Typography>
        <EventTypesWrapper>
          {eventTypesContent.map((eventType) => (
            <Grid container key={eventType.title} spacing={5}>
              <Grid item md={4} justifyContent="flex-end">
                <Typography variant="h5" align="right">
                  {eventType.title}
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography variant="body1">{eventType.content}</Typography>
              </Grid>
            </Grid>
          ))}
        </EventTypesWrapper>
      </Container>
    </EventsBlurbSection>
  );
};

export default EventsBlurb;
