import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Button from 'components/Button';
import step1 from 'assets/svgs/background/home-step-1.svg';
import oweek2021 from 'assets/images/secsoc/oweek-2021.jpg';
import {
  StepsBackdrop, StepNumberBg, StepBgImg, StepsBtnWrapper, StepsContent,
} from './styles';

const StepOne = () => {
  return (
    <Grid md={4} sm={4} xs={12}>
      <StepsBackdrop>
        <StepBgImg src={oweek2021} />
        <StepNumberBg src={step1} />
        <StepsContent>
          <Typography variant="h6" align="center">
            Join us to become on SpArc
          </Typography>
          <Typography variant="subtitle1" align="center">
            Become an official member by joining us on SpArc!
          </Typography>
          <StepsBtnWrapper>
            <a
              href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VzhQAE"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Sign Up</Button>
            </a>
          </StepsBtnWrapper>
        </StepsContent>
      </StepsBackdrop>
    </Grid>
  );
};

export default StepOne;
