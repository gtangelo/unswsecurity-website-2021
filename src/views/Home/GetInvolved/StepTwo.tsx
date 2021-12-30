import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import youtube from 'assets/svgs/icons/youtube.svg';
import facebook from 'assets/svgs/icons/facebook.svg';
import linkedin from 'assets/svgs/icons/linkedin.svg';
import step2 from 'assets/svgs/background/home-step-2.svg';
import laptopPerson from 'assets/images/secsoc/laptop-person.jpg';
import Button from 'components/Button';
import {
  StepsBackdrop,
  StepBgImg,
  StepNumberBg,
  StepsContent,
  StepsSocialsWrapper,
  StepsBtnWrapper,
} from './styles';

const StepTwo = () => {
  return (
    <Grid md={4} sm={4} xs={12}>
      <StepsBackdrop>
        <StepBgImg src={laptopPerson} />
        <StepNumberBg src={step2} />
        <StepsContent>
          <Typography variant="h6" align="center">
            Follow Us
          </Typography>
          <StepsSocialsWrapper>
            <a href="https://www.facebook.com/unswsecsoc" target="_blank" rel="noreferrer">
              <img alt="SecSoc Facebook Page" src={facebook} />
            </a>
            <a href="https://www.linkedin.com/company/secsoc/" target="_blank" rel="noreferrer">
              <img alt="SecSoc LinkedIn" src={linkedin} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDySZtnvqbRS7qJttX1SG5Q"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="SecSoc YouTube" src={youtube} />
            </a>
          </StepsSocialsWrapper>
          <Typography variant="subtitle1" align="center">
            Stay up to date with the latest information on our social channels!
          </Typography>
          <StepsBtnWrapper>
            <a href="https://goo.gl/w6sbzv" target="_blank" rel="noreferrer">
              <Button>Subscribe to our Newsletter</Button>
            </a>
          </StepsBtnWrapper>
        </StepsContent>
      </StepsBackdrop>
    </Grid>
  );
};

export default StepTwo;
