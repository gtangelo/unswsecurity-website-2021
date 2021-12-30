import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@material-ui/core';
import SponsorCard from 'components/SponsorCard';
import SPONSORS from 'data/sponsors/sponsors';
import { CURR_SPONSER_YEAR } from 'utils/config';
import { SponsorsYear } from 'types/Sponsor';
import TabsBar from 'components/TabsBar/TabsBar';

const CurrentSponsorsSection = styled.section`
  margin: var(--section-margin);
`;

const SponsorTierWrapper = styled.div`
  margin-bottom: 50px;
`;

const PastSponsors = () => {
  const SPONSOR_YEARS = SPONSORS.filter((sponsors) => sponsors.year < CURR_SPONSER_YEAR)
    .sort((a, b) => a.year - b.year)
    .map((sponsors) => sponsors.year);
  const [currSponsors, setCurrSponsors] = useState<SponsorsYear | null>(
    SPONSORS.find((sponsors) => sponsors.year === SPONSOR_YEARS[SPONSOR_YEARS.length - 1]) || null,
  );
  const [currYear, setCurrYear] = useState(CURR_SPONSER_YEAR - 1);

  return (
    <CurrentSponsorsSection>
      <Container>
        <Typography variant="h3" align="center">
          Previous Sponsors
        </Typography>
        <TabsBar
          selected={currYear}
          toggle={(event, newYear) => {
            setCurrYear(newYear);
            setCurrSponsors(() => {
              const yearIndex = SPONSORS.findIndex((sponsors) => sponsors.year === newYear);
              return SPONSORS[yearIndex];
            });
          }}
          tabs={SPONSOR_YEARS}
        />
        <br />
        <Typography variant="h4" align="center">
          {currSponsors && currSponsors.year}
          &nbsp;
          <span className="highlight">Sponsors</span>
        </Typography>
        {currSponsors
          ? currSponsors.tiers.map((sponsorTier) => (
            <SponsorTierWrapper key={sponsorTier.level}>
              <Typography variant="h5" align="center">
                <span className="highlight">{sponsorTier.level}</span>
                  &nbsp; Level Sponsors
              </Typography>
              <Grid container spacing={5} justifyContent="center" alignItems="stretch">
                {sponsorTier.sponsors.map((sponsor) => (
                  <Grid item md={4} sm={6} xs={12} key={sponsor.name}>
                    <SponsorCard
                      color={sponsor.color}
                      logo={sponsor.logo}
                      name={sponsor.name}
                      description={sponsor.description}
                      href={sponsor.href}
                    />
                  </Grid>
                ))}
              </Grid>
            </SponsorTierWrapper>
          ))
          : 'Stay tuned for updates'}
      </Container>
    </CurrentSponsorsSection>
  );
};

export default PastSponsors;
