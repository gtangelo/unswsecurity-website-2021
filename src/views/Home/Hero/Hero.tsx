import styled from 'styled-components';
import {
  Box, Container, Grid, Typography, useTheme, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import logo from 'assets/images/branding/secsoc-logo-black.png';
import hashBg from 'assets/svgs/hash-bg.svg';
import Button from 'components/Button';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const HeroWrapper = styled.section`
  --hero-height: 65vh;

  /* background: radial-gradient(75.59% 302.36% at 79.58% 61.87%, #063d36 0%, #242424 100%); */
  min-height: var(--hero-height);
  padding: 20px 0;
  /* color: #fff; */
  position: relative;
`;

const GridWrapper = styled.div`
  min-height: var(--hero-height);
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: var(--section-margin);
`;

const HeroBackdrop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const SecSocLogo = styled.img`
  width: 100%;
  max-width: 270px;
`;

const BtnWrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 15px;
  }
`;

const Hero = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HeroWrapper>
      <Container>
        <HeroBackdrop src={hashBg} />
        <GridWrapper>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            direction={!desktop ? 'row' : 'row-reverse'}
          >
            <Grid item md={4} sm={12} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <SecSocLogo src={logo} alt="secsoc logo" />
              </Box>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <HeroContent>
                <Typography variant="h2" style={{ textTransform: 'lowercase' }}>
                  #! /sec/soc
                </Typography>
                <Typography variant="h4" style={{ textTransform: 'lowercase' }}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(60)
                        .typeString('Engaging students into the world of cyber security!')
                        .start();
                    }}
                  />
                </Typography>
                <BtnWrapper>
                  <Link to="get-involved" spy smooth duration={1500} offset={-100}>
                    <Button>Get Involved!</Button>
                  </Link>
                  <Link to="upcoming-events" spy smooth offset={-100}>
                    <Button>What's On!</Button>
                  </Link>
                </BtnWrapper>
              </HeroContent>
            </Grid>
          </Grid>
        </GridWrapper>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
