import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import discord from 'assets/svgs/icons/discord.svg';
import slack from 'assets/svgs/icons/slack.svg';
import facebookGroup from 'assets/svgs/icons/facebook-group.svg';
import step3 from 'assets/svgs/background/home-step-3.svg';
import bsidesBus2021 from 'assets/images/secsoc/bsides-bus-2021.png';
import {
  StepsBackdrop,
  StepBgImg,
  StepNumberBg,
  StepsContent,
  StepsSocialsWrapper,
} from './styles';

const StepThree = () => {
  return (
    <Grid md={4} sm={4} xs={12}>
      <StepsBackdrop>
        <StepBgImg src={bsidesBus2021} />
        <StepNumberBg src={step3} />
        <StepsContent>
          <Typography variant="h6" align="center">
            Join our community
          </Typography>
          <StepsSocialsWrapper>
            <a href="https://discord.gg/9hZtuSu" target="_blank" rel="noreferrer">
              <img alt="SecSoc Discord" src={discord} />
            </a>
            <a href="https://www.facebook.com/groups/unswsecsoc/" target="_blank" rel="noreferrer">
              <img alt="SecSoc Facebook Group" src={facebookGroup} />
            </a>
            <a href="https://seceduau.slack.com/" target="_blank" rel="noreferrer">
              <img alt="SecEde Slack" src={slack} />
            </a>
          </StepsSocialsWrapper>
          <Typography variant="subtitle1" align="center">
            Meet other security enthusiasts alike!
          </Typography>
        </StepsContent>
      </StepsBackdrop>
    </Grid>
  );
};

export default StepThree;
