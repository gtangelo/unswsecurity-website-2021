import React from 'react';
import styled from 'styled-components';
import {
  Box, Container, Grid, Typography,
} from '@material-ui/core';
import SponsorCard from 'components/SponsorCard';
import SPONSORS from 'data/sponsors/sponsors';
import Button from 'components/Button';
import { Link } from 'gatsby';
import { CURR_SPONSER_YEAR } from 'utils/config';

const CurrentSponsorsSection = styled.section`
  margin: var(--section-margin);
`;

const SponsorTierWrapper = styled.div`
  margin: var(--section-margin);
`;

const StayTunedWrapper = styled.div`
  padding: var(--section-margin);
`;

const CurrentSponsors = () => {
  const yearIndex = SPONSORS.findIndex((sponsor) => sponsor.year === CURR_SPONSER_YEAR);
  let CURRENT_SPONSORS = null;
  if (yearIndex) CURRENT_SPONSORS = SPONSORS[yearIndex];
  return (
    <CurrentSponsorsSection>
      <Container>
        <Typography variant="h3" align="center">
          Current&nbsp;
          <span className="highlight">Sponsors</span>
        </Typography>
        <Typography variant="body1" align="center">
          Currently, we have are supported by a multitude of sponsors from the industry which help
          us empower the UNSW cyber security community.
        </Typography>
        {CURRENT_SPONSORS ? (
          CURRENT_SPONSORS.tiers.map((sponsorTier) => (
            <SponsorTierWrapper key={sponsorTier.level}>
              <Typography variant="h4" align="center">
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
        ) : (
          <StayTunedWrapper>
            <Typography variant="h6" align="center">
              No current sponsors to show. Stay tuned to see some awesome partnerships that will
              happen in the near future!
            </Typography>
          </StayTunedWrapper>
        )}
        <Box width="100%" display="flex" justifyContent="center">
          <Link to="/sponsors/past-sponsors">
            <Button>See Previous Sponsors</Button>
          </Link>
        </Box>
      </Container>
    </CurrentSponsorsSection>
  );
};

export default CurrentSponsors;
