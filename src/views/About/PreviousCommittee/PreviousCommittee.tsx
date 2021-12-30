import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MemberCard from 'components/MemberCard';
import TabsBar from 'components/TabsBar/TabsBar';
import COMMITTEE_TEAMS from 'data/committee/committee-teams';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommitteeTeam, SubcommitteePortfolio } from 'types/CommitteeMember';
import { CURR_TEAM_YEAR } from 'utils/config';

const PreviousCommitteeSection = styled.section`
  margin: var(--section-margin);
`;

const TeamWrapper = styled.div`
  margin: var(--section-margin);
`;

const PreviousCommittee = () => {
  const TEAM_YEARS = COMMITTEE_TEAMS.filter((team) => team.year < CURR_TEAM_YEAR)
    .sort((a, b) => a.year - b.year)
    .map((team) => team.year);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const [currCommitteeTeam, setCurrCommitteeTeam] = useState<CommitteeTeam | null>(
    COMMITTEE_TEAMS.find((team) => team.year === TEAM_YEARS[TEAM_YEARS.length - 1]) || null,
  );
  const [currYear, setCurrYear] = useState(CURR_TEAM_YEAR - 1);
  const [currSubcomitteeTeam, setCurrSubcomitteeTeam] = useState<SubcommitteePortfolio[] | null>(
    null,
  );

  useEffect(() => {
    if (currCommitteeTeam && currCommitteeTeam.subcommittee) {
      const subcommitteePortfolios: SubcommitteePortfolio[] = [];
      currCommitteeTeam.subcommittee.forEach((member) => {
        const portfolioFound = subcommitteePortfolios.find(
          (portfolio) => portfolio.portfolio === member.portfolio,
        );
        if (!portfolioFound) {
          const newPortfolio: SubcommitteePortfolio = {
            portfolio: member.portfolio,
            subcommittee: [member],
          };
          subcommitteePortfolios.push(newPortfolio);
        } else {
          const portfolioIndex = subcommitteePortfolios.findIndex(
            (portfolio) => portfolio.portfolio === member.portfolio,
          );
          if (portfolioIndex) subcommitteePortfolios[portfolioIndex].subcommittee.push(member);
        }
      });
      setCurrSubcomitteeTeam(subcommitteePortfolios);
    }
  }, [currCommitteeTeam]);

  return (
    <PreviousCommitteeSection>
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          Previous Committee
        </Typography>
        <TabsBar
          selected={currYear}
          toggle={(event, newYear) => {
            setCurrYear(newYear);
            setCurrCommitteeTeam(() => {
              const yearIndex = COMMITTEE_TEAMS.findIndex((team) => team.year === newYear);
              return COMMITTEE_TEAMS[yearIndex];
            });
          }}
          tabs={TEAM_YEARS}
        />
        <br />
        <Typography variant="h4" align="center">
          {currCommitteeTeam && currCommitteeTeam.year}
          <span className="highlight">&nbsp;Committee Team</span>
        </Typography>
        <Typography variant="h5" className="highlight" align="center">
          Executives
        </Typography>
        <Grid container spacing={desktop ? 5 : 3} justifyContent="center">
          {currCommitteeTeam && currCommitteeTeam.executives.map((member) => (
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
          ))}
        </Grid>
        {currCommitteeTeam && currCommitteeTeam.committee && (
          <TeamWrapper>
            <Typography variant="h5" className="highlight" align="center">
              Committee
            </Typography>
            <Grid container spacing={desktop ? 5 : 3} justifyContent="center">
              {currCommitteeTeam.committee.map((member) => (
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
              ))}
            </Grid>
          </TeamWrapper>
        )}
        {currSubcomitteeTeam && currSubcomitteeTeam.length > 0 && (
          <TeamWrapper>
            <Typography variant="h5" className="highlight" align="center">
              Subcommittee
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
              {currSubcomitteeTeam.map((portfolio) => (
                <Grid item key={portfolio.portfolio} md={2} sm={4} xs={6}>
                  <Typography variant="h6" align="center">
                    {portfolio.portfolio}
                  </Typography>
                  {portfolio.subcommittee.map((member) => (
                    <Typography variant="body2" align="center" key={member.name}>
                      {member.name}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </TeamWrapper>
        )}
      </Container>
    </PreviousCommitteeSection>
  );
};

export default PreviousCommittee;
