import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import induction from 'assets/images/secsoc/subcom-induction-2021.jpg';
import { Link } from 'gatsby';
import Button from 'components/Button';
import { CURR_TEAM_YEAR } from 'utils/config';

const CommitteeBlurbSection = styled.section`
  margin: var(--section-margin);
`;

const CommitteeImg = styled.img`
  width: 100%;
  padding-top: 50px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CommitteeTitle = styled.div`
  margin: var(--section-margin);
`;

const CommitteeBlurb = () => {
  return (
    <CommitteeBlurbSection>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          In 2021, SecSoc underwent a restructure whereby the introduction of subcommittees means
          that the society is expanding on multiple fronts. As such, this led us to have a diverse
          range of portfolios in our society (Careers, Events, Media, CTFs and Projects) which are
          led by an awesome team of directors.
        </Typography>
        <BtnWrapper>
          <Link to="/about/previous-committee">
            <Button>See Previous Teams</Button>
          </Link>
        </BtnWrapper>
        <CommitteeTitle>
          <Typography variant="h3" align="center">
            {CURR_TEAM_YEAR}
            <span className="highlight">&nbsp;Committee Team</span>
          </Typography>
          <Typography variant="subtitle1" align="center">
            Meet the 2021 committee team of the UNSW Security Society that are responsible for this
            year's initiatives and events!
          </Typography>
          <CommitteeImg src={induction} alt="2021 Society Induction" width="100%" />
        </CommitteeTitle>
      </Container>
    </CommitteeBlurbSection>
  );
};

export default CommitteeBlurb;
