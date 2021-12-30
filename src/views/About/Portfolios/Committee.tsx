import { Container, Typography, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MemberCard from 'components/MemberCard';
import { CommitteeTeam } from 'types/CommitteeMember';
import { CURR_TEAM_YEAR } from 'utils/config';

interface CommitteeProps {
  committeeTeam: CommitteeTeam | null;
}

const StayTunedWrapper = styled.div`
  padding: var(--section-margin);
`;

const Committee = ({ committeeTeam }: CommitteeProps) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center">
        Committee
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {committeeTeam && committeeTeam.committee ? (
          committeeTeam.committee.map((member) => (
            <Grid item key={member.name} md={6} sm={12} xs={12}>
              <MemberCard
                role={member.role}
                name={member.name}
                email={member.email}
                bio={member.bio}
                slack={member.slack}
                discord={member.discord}
                website={member.website}
              />
            </Grid>
          ))
        ) : (
          <StayTunedWrapper>
            <Typography variant="h6" align="center">
              No current committee to show right now. Stay tuned to see who will be part of
              the&nbsp;
              {CURR_TEAM_YEAR}
              &nbsp;committee!
            </Typography>
          </StayTunedWrapper>
        )}
      </Grid>
    </Container>
  );
};

export default Committee;
