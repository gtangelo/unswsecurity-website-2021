import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const GetInvolvedSection = styled.section`
  margin: var(--section-margin);
`;

const GetInvolved = () => {
  return (
    <GetInvolvedSection id="get-involved">
      <Typography align="center" variant="h3" component="h3">
        <span className="highlight">Get</span>
        &nbsp;Involved!
      </Typography>
      <Typography align="center" variant="body1" component="p">
        Find ways to get involved with our community.
      </Typography>
      <Grid container>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Grid>
    </GetInvolvedSection>
  );
};

export default GetInvolved;
