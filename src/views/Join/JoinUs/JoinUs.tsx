import { Container, Typography } from '@material-ui/core';
import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import youtube from 'assets/svgs/icons/youtube.svg';
import facebook from 'assets/svgs/icons/facebook.svg';
import linkedin from 'assets/svgs/icons/linkedin.svg';
import discord from 'assets/svgs/icons/discord.svg';
import slack from 'assets/svgs/icons/slack.svg';
import facebookGroup from 'assets/svgs/icons/facebook-group.svg';

const JoinUsWrapper = styled.section`
  margin: var(--section-margin);

  a,
  button {
    margin-bottom: 15px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > a {
    width: 50px;
    margin: 0 10px;
  }

  & img {
    width: 100%;
  }

  button {
    margin-bottom: 0;
  }
`;

const JoinUs = () => {
  return (
    <JoinUsWrapper>
      <Container>
        <Typography variant="h6">
          Interested in reaching out to the UNSW Security Society?
        </Typography>
        <Typography>
          For general enquiries, feel free to reach out to committee@unswsecurity.com.
        </Typography>
        <Typography variant="body1">
          For sponsorship enquiries or interest in supporting our community, reach out to
          partnerships@unswsecurity.com
        </Typography>
        <Typography variant="h6">Interested in joining the UNSW Security Society?</Typography>
        <Typography variant="body1">
          Find out how you can be apart our society in these 3 easy steps!
        </Typography>
        <Typography variant="subtitle1">
          1. Officially become a member by joining us on SpArc!
        </Typography>
        <Typography variant="body1">
          SpArc is UNSW Arc’s formal membership website. Sign up to make sure you don’t miss out on
          anything!
        </Typography>
        <a
          href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VzhQAE"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Sign Up</Button>
        </a>
        <Typography variant="subtitle1">
          2. Stay connected with us through our social media!
        </Typography>
        <Typography variant="body1">
          Stay up to date with the latest information on our social channels!
        </Typography>
        <SocialLinksWrapper>
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
          <div>
            <a href="https://goo.gl/w6sbzv" target="_blank" rel="noreferrer">
              <Button>Subscribe to our Newsletter</Button>
            </a>
          </div>
        </SocialLinksWrapper>
        <Typography variant="subtitle1">
          3. Stay connected through our community channels!
        </Typography>
        <Typography variant="body1">
          Meet other security enthusiasts alike through our Facebook Group and Discord communities!
        </Typography>
        <SocialLinksWrapper>
          <a href="https://discord.gg/9hZtuSu" target="_blank" rel="noreferrer">
            <img alt="SecSoc Discord" src={discord} />
          </a>
          <a href="https://www.facebook.com/groups/unswsecsoc/" target="_blank" rel="noreferrer">
            <img alt="SecSoc Facebook Group" src={facebookGroup} />
          </a>
          <a href="https://seceduau.slack.com/" target="_blank" rel="noreferrer">
            <img alt="SecEde Slack" src={slack} />
          </a>
        </SocialLinksWrapper>
      </Container>
    </JoinUsWrapper>
  );
};

export default JoinUs;
