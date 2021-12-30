import { Container, Grid, Typography } from '@material-ui/core';
import MemberCard from 'components/MemberCard';
import COMMITTEE_TEAMS from 'data/committee/committee-teams';
import React from 'react';
import styled from 'styled-components';
import { CURR_TEAM_YEAR } from 'utils/config';

const ExecutivesSection = styled.section`
  margin: var(--section-margin);
`;

const StayTunedWrapper = styled.div`
  padding: var(--section-margin);
`;

const Executives = () => {
  const yearIndex = COMMITTEE_TEAMS.findIndex((team) => team.year === CURR_TEAM_YEAR);
  let CURRENT_TEAM = null;
  if (yearIndex) CURRENT_TEAM = COMMITTEE_TEAMS[yearIndex];
  return (
    <ExecutivesSection>
      <Container maxWidth="md">
        <Typography variant="h4" align="center">
          Executives
        </Typography>
        <Typography variant="body1" align="center">
          The Executives are responsible for overseeing activities of the society. They are elected
          every year by members of the society.
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {CURRENT_TEAM ? (
            CURRENT_TEAM.executives.map((exec) => (
              <Grid item key={exec.name} md={6} sm={6} xs={12}>
                <MemberCard
                  key={exec.name}
                  name={exec.name}
                  bio={exec.bio}
                  role={exec.role}
                  email={exec.email}
                  slack={exec.slack}
                  discord={exec.discord}
                  website={exec.website}
                />
              </Grid>
            ))
          ) : (
            <StayTunedWrapper>
              <Typography variant="h6" align="center">
                No current executives to show right now. Stay tuned to see who will be part of
                the&nbsp;
                {CURR_TEAM_YEAR}
                &nbsp;executive team!
              </Typography>
            </StayTunedWrapper>
          )}
        </Grid>
      </Container>
    </ExecutivesSection>
  );
};

export default Executives;
