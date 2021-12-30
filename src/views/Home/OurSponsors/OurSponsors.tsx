import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import Sponsor, { SponsorsLevel, SponsorsYear } from 'types/Sponsor';
import SPONSORS from 'data/sponsors/sponsors';
import styled from 'styled-components';

const OurSponsorsSection = styled.section`
  margin: var(--section-margin);
`;

const SponsorsWrapper = styled.div`
  margin: var(--section-margin);
`;

const SponsorImg = styled.img`
  height: 75px;
  width: 100%;
  object-fit: contain;
  padding: 0 20px;
`;

const OurSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const allSponsors: Sponsor[] = [];
    if (SPONSORS.length <= 0) return;
    const currSponsors: SponsorsYear = SPONSORS[SPONSORS.length - 1];
    currSponsors.tiers.forEach((sponsLevel: SponsorsLevel) => {
      sponsLevel.sponsors.forEach((sponsor: Sponsor) => allSponsors.push(sponsor));
    });
    setSponsors(allSponsors);
  }, []);

  return (
    <OurSponsorsSection>
      <Container>
        <Typography align="center" variant="h3">
          Our&nbsp;
          <span className="highlight">Sponsors</span>
        </Typography>
        <Typography align="center" variant="body1" component="p">
          We are proudly sponsored by our partners.
        </Typography>
        <SponsorsWrapper>
          <Grid container justifyContent="center" spacing={3}>
            {sponsors.map((sponsor) => (
              <Grid item md={3} sm={4} key={sponsor.name}>
                <a href={sponsor.href} target="_blank" rel="noreferrer">
                  <SponsorImg src={sponsor.logo} />
                </a>
              </Grid>
            ))}
          </Grid>
        </SponsorsWrapper>
        <Typography variant="body1" component="p">
          Interested in supporting us? Contact us through&nbsp;
          <a href="mailto:partnerships@unswsecurity.com">partnerships@unswsecurity.com</a>
        </Typography>
      </Container>
    </OurSponsorsSection>
  );
};

export default OurSponsors;
