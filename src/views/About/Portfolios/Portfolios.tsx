import React from 'react';
import styled from 'styled-components';
import COMMITTEE_TEAMS from 'data/committee/committee-teams';
import { CommitteeTeam } from 'types/CommitteeMember';
import { CURR_TEAM_YEAR } from 'utils/config';
import Committee from './Committee';
import PortfolioSubcommittee from './PortfolioSubcommittee';

const PortfoliosSection = styled.section`
  padding: var(--section-margin);
  background-color: var(--black);
  color: var(--white);
  position: relative;
  overflow: hidden;
`;

const Portfolios = () => {
  const yearIndex = COMMITTEE_TEAMS.findIndex((team) => team.year === CURR_TEAM_YEAR);
  let CURRENT_TEAM: CommitteeTeam | null = null;
  if (yearIndex) CURRENT_TEAM = COMMITTEE_TEAMS[yearIndex];

  return (
    <PortfoliosSection>
      {CURRENT_TEAM && CURRENT_TEAM.committee && CURRENT_TEAM.subcommittee ? (
        <PortfolioSubcommittee committeeTeam={CURRENT_TEAM} />
      ) : (
        <Committee committeeTeam={CURRENT_TEAM} />
      )}
    </PortfoliosSection>
  );
};

export default Portfolios;
