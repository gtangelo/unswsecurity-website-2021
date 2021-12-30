import {
  Container, Grid, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ROUTES from 'data/routes';
import youtube from 'assets/svgs/icons/youtube.svg';
import facebook from 'assets/svgs/icons/facebook.svg';
import linkedin from 'assets/svgs/icons/linkedin.svg';
import discord from 'assets/svgs/icons/discord.svg';
import facebookGroup from 'assets/svgs/icons/facebook-group.svg';
import SvgIconLink from 'components/SvgIconLink';
import PageTitleItem from './PageTitleItem';

const FooterWrapper = styled.footer`
  padding: 0 12px;
  padding-top: 50px;
  padding-bottom: 20px;
  min-height: var(--footer-height);
  display: flex;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
`;

const AddressWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const GrievanceWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const ContributionWrapper = styled.div`
  border-top: 1px solid var(--white);
  padding-top: 20px;
`;

const PageTitlesWrapper = styled.ul<{ justifyContent: string }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  justify-content: ${(props) => props.justifyContent};

  & > * {
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;

const IconsWrapper = styled.div<{ justifyContent: string }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  justify-content: ${(props) => props.justifyContent};
  margin-top: 30px;

  & > * {
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;

const Footer = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <AddressWrapper>
              <Typography variant="h5">UNSW Security Society</Typography>
              <Typography variant="subtitle1">Building K17 UNSW Kensington Sydney</Typography>
              <Typography variant="subtitle2">NSW 2052 Australia</Typography>
            </AddressWrapper>
            <Typography variant="subtitle2" component="a" href="mailto:grievance@unswsecurity.com">
              committee@unswsecurity.com
            </Typography>
            <GrievanceWrapper>
              <Typography variant="subtitle2">
                Grievance Officer &nbsp;
                <a href="mailto:grievance@unswsecurity.com">(grievance@unswsecurity.com)</a>
              </Typography>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://goo.gl/forms/2zC1JlCV5q6tSVcP2"
                target="_blank"
                rel="noreferrer"
              >
                Anonymous Grief Form
              </Typography>
            </GrievanceWrapper>
          </Grid>
          <Grid item md={7} container>
            <Grid item md={12} xs={12} sm={12}>
              <PageTitlesWrapper justifyContent={desktop ? 'flex-end' : 'flex-start'}>
                <PageTitleItem href="/" title="Home" />
                {ROUTES.map((route) => (
                  <PageTitleItem key={route.title} href={route.route} title={route.title} />
                ))}
                <PageTitleItem href="/join" title="Join Us" />
              </PageTitlesWrapper>
            </Grid>
            <Grid item md={12} xs={12} sm={12} container alignItems="flex-end">
              <IconsWrapper justifyContent={desktop ? 'flex-end' : 'flex-start'}>
                <SvgIconLink
                  href="https://www.facebook.com/unswsecsoc"
                  src={facebook}
                  alt="SecSoc Facebook"
                />
                <SvgIconLink
                  href="https://www.youtube.com/channel/UCDySZtnvqbRS7qJttX1SG5Q"
                  src={youtube}
                  alt="SecSoc YouTube"
                />
                <SvgIconLink
                  href="https://www.linkedin.com/company/secsoc/"
                  src={linkedin}
                  alt="SecSoc LinkedIn"
                />
                <SvgIconLink href="https://discord.gg/9hZtuSu" src={discord} alt="SecSoc Discord" />
                <SvgIconLink
                  href="https://www.facebook.com/groups/unswsecsoc/"
                  src={facebookGroup}
                  alt="SecSoc Facebook Group"
                />
              </IconsWrapper>
            </Grid>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <ContributionWrapper>
              <Typography variant="subtitle1" align="center">
                &copy; UNSW Security Society
              </Typography>
              <Typography variant="subtitle1" align="center">
                Made with ❤ by SecSoc Projects
              </Typography>
            </ContributionWrapper>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
