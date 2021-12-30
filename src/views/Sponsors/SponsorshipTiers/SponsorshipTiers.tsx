import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const SponsorshipTiersSection = styled.section`
  margin: var(--section-margin);
`;

const SponsorshipTiersWrapper = styled.div`
  margin: var(--section-margin);
`;

const sponsorshipTiersContent = [
  {
    title: 'Platnium',
    content:
      'Platinium level sponsors greatly contributes the our community to bring forward the best events throughout the year. Sponsors would have opportunity to host several talks and workshops. In addition, we collaborate with platinium sponsors to bring sponsored capture the flag competitions where some challenges may be created by these security experts from these companies!',
  },
  {
    title: 'Gold',
    content:
      'Gold level sponsors makes a substantial contribution to the society and the UNSW security community. We collaborate with gold level sponsors to bring events such as talks to introduce students to new security concepts!',
  },
  {
    title: 'Silver',
    content:
      'Silver level sponsors also make an impact to the events that they present. They can host talks, workshops or networking events to expose students what the industry is like and some intriguing security topics!',
  },
];

const SponsorshipTiers = () => {
  return (
    <SponsorshipTiersSection>
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          Our&nbsp;
          <span className="highlight">Sponsorship Tiers</span>
        </Typography>
        <Typography variant="body1" align="center">
          Our sponsors can support us in many different ways. We offer three sponsorship levels that
          a sponsor can support us and the security community at UNSW. The level of support and
          interaction for each sponsor may vary but nevertheless, each sponsor aims to bring forward
          events that will help foster the community of security enthusiasts!
        </Typography>
        <SponsorshipTiersWrapper>
          {sponsorshipTiersContent.map((sponsorTier) => (
            <Grid container key={sponsorTier.title} spacing={5}>
              <Grid item md={4} justifyContent="flex-end">
                <Typography variant="h5" align="right">
                  {sponsorTier.title}
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography variant="body1">{sponsorTier.content}</Typography>
              </Grid>
            </Grid>
          ))}
        </SponsorshipTiersWrapper>
      </Container>
    </SponsorshipTiersSection>
  );
};

export default SponsorshipTiers;
