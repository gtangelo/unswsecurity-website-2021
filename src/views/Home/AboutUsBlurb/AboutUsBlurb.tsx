import {
  Container, Grid, Typography, useTheme, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import wifihacking from 'assets/images/secsoc/wifihacking.jpg';
import Button from 'components/Button';
import { Link } from 'gatsby';
import aboutUsBg from 'assets/svgs/background/home-about-us.svg';

const AboutUsBlurbSection = styled.section`
  padding: var(--section-margin);
  background-color: var(--tilt-dark);
  color: var(--white);
  position: relative;
`;

const AboutUsBgBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-height: 100%;
  z-index: 0;
  max-width: 100%;
`;

const AboutUsBgTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 100%;
  z-index: 0;
  transform: rotate(180deg);
  max-width: 100%;
`;

const AboutUsBody = styled.div`
  margin: 50px 0;
  width: 100%;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const AboutUsBlurb = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AboutUsBlurbSection>
      <AboutUsBgTop src={aboutUsBg} />
      <AboutUsBgBottom src={aboutUsBg} />
      <Container maxWidth="md">
        <AboutUsBody>
          <Typography variant="h3" align="center">
            Welcome to&nbsp;
            <span className="highlight">UNSW Security Society!</span>
          </Typography>
          <Grid
            container
            spacing={5}
            alignItems="center"
            direction={desktop ? 'row-reverse' : 'row'}
          >
            <Grid item md={5} sm={6} xs={12}>
              <img src={wifihacking} alt="wifihacking" width="100%" />
            </Grid>
            <Grid item md={7} sm={6} xs={12}>
              <Typography variant="body1" component="p" align="right">
                As a key part of the security community within UNSW, the UNSW Security Society
                organises events for you to meet other students interested in cyber security and to
                learn, develop, and test skills in hacking, cryptography, and general cyber
                security.
              </Typography>
              <BtnWrapper>
                <Link to="/about/team">
                  <Button>Learn More</Button>
                </Link>
              </BtnWrapper>
            </Grid>
          </Grid>
        </AboutUsBody>
      </Container>
    </AboutUsBlurbSection>
  );
};

export default AboutUsBlurb;
