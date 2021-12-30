import {
  Container, Typography, Grid, useMediaQuery, useTheme, Box,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MemberCard from 'components/MemberCard';
import {
  CAREERS,
  CommitteeTeam,
  CTF,
  EVENTS,
  MEDIA,
  PORTFOLIO,
  PROJECTS,
} from 'types/CommitteeMember';
import { CURR_TEAM_YEAR, PORTFOLIOS } from 'utils/config';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import events from 'assets/svgs/portfolio/events.svg';
import projects from 'assets/svgs/portfolio/projects.svg';
import media from 'assets/svgs/portfolio/media.svg';
import careers from 'assets/svgs/portfolio/careers.svg';
import ctf from 'assets/svgs/portfolio/ctf.svg';

const carouselVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '105vw' : '-105vw',
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '105vw' : '-105vw',
      opacity: 0,
    };
  },
};

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  @media screen and (max-width: 768px) {
    height: 850px;
  }

  @media screen and (max-width: 585px) {
    height: 1050px;
  }

  @media screen and (max-width: 500px) {
    height: 900px;
  }
`;

const CarouselBg = styled.img`
  position: absolute;
  bottom: 0;
  right: -5%;
  height: 40%;
  z-index: -1 !important;
`;

const PortfolioWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;

  & img {
    user-select: none;
  }
`;

const portfolioDescriptions = [
  {
    portfolio: EVENTS,
    description:
      'The Events portfolio is responsible for organising workshops and talks for society members as well as non-technical, social and wellbeing events.',
    svg: events,
  },
  {
    portfolio: CTF,
    description:
      'The CTF portfolio is responsible for organising CTFs run internally and for coordinating the society’s involvement in external CTF competitions.',
    svg: ctf,
  },
  {
    portfolio: PROJECTS,
    description:
      'The Projects portfolio is responsible for the Society’s infrastructure, website (unswsecurity.com) and projects.',
    svg: projects,
  },
  {
    portfolio: MEDIA,
    description:
      'The Media portfolio is responsible for designing, creating, and publishing media for the society.',
    svg: media,
  },
  {
    portfolio: CAREERS,
    description:
      'The Careers portfolio is responsible for running professional events in collaboration with sponsors for the society.',
    svg: careers,
  },
];

const ArrowWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  z-index: 10;

  & > * {
    color: var(--black);
  }
  :hover {
    cursor: pointer;
  }
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  position: absolute;
  left: 5vw;
  top: 50%;
  transform: translateY(50%);
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  position: absolute;
  right: 5vw;
  top: 50%;
  transform: translateY(50%);
`;

interface PortfolioSubcommitteeProps {
  committeeTeam: CommitteeTeam;
}

const PortfolioSubcommittee = ({ committeeTeam }: PortfolioSubcommitteeProps) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const ARROW_SIZE = 20;

  const [currPortfolioTeam, setCurrPortfolioTeam] = useState(committeeTeam);
  const [currPortfolio, setCurrPortfolio] = useState<PORTFOLIO>(EVENTS);
  const [currPortfolioDescription, setCurrPortfolioDescription] = useState<string>(
    portfolioDescriptions[0].description,
  );
  const [currPortfolioSvgBg, setCurrPortfolioSvgBg] = useState<string>(
    portfolioDescriptions[0].description,
  );
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    // every time the portfolio changes, update the team to be displayed
    if (committeeTeam && committeeTeam.committee && committeeTeam.subcommittee) {
      const portfolioData = portfolioDescriptions.find(
        (portfolio) => portfolio.portfolio === currPortfolio,
      );
      if (portfolioData) {
        setCurrPortfolioDescription(portfolioData.description);
        setCurrPortfolioSvgBg(portfolioData.svg);
      }
      let committee = committeeTeam.committee.filter(
        (member) => member.portfolio === currPortfolio,
      );
      if (!committee) committee = [];
      let subcommittee = committeeTeam.subcommittee
        ? committeeTeam.subcommittee.filter((member) => member.portfolio === currPortfolio)
        : [];
      if (!subcommittee) subcommittee = [];
      const portfolioTeam: CommitteeTeam = {
        year: CURR_TEAM_YEAR,
        executives: [],
        committee,
        subcommittee,
      };
      setCurrPortfolioTeam(portfolioTeam);
    }
  }, [currPortfolio]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextPortfolioIndex = PORTFOLIOS.findIndex((portfolio) => portfolio === currPortfolio) + 1;
      if (nextPortfolioIndex === PORTFOLIOS.length) nextPortfolioIndex = 0;
      setCurrPortfolio(PORTFOLIOS[nextPortfolioIndex]);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [currPortfolio]);

  return (
    <>
      <Typography variant="h4" align="center">
        Portfolio
      </Typography>
      <CarouselWrapper>
        {desktop && (
          <>
            <LeftArrowWrapper
              onClick={() => {
                setDirection(-1);
                const currIndex = PORTFOLIOS.findIndex((portfolio) => portfolio === currPortfolio);
                let nextPortfolioIndex = currIndex - 1;
                if (nextPortfolioIndex < 0) nextPortfolioIndex = PORTFOLIOS.length - 1;
                setCurrPortfolio(PORTFOLIOS[nextPortfolioIndex]);
              }}
            >
              <FaChevronLeft size={ARROW_SIZE} />
            </LeftArrowWrapper>
            <RightArrowWrapper
              onClick={() => {
                setDirection(1);
                const currIndex = PORTFOLIOS.findIndex((portfolio) => portfolio === currPortfolio);
                let nextPortfolioIndex = currIndex + 1;
                if (nextPortfolioIndex === PORTFOLIOS.length) nextPortfolioIndex = 0;
                setCurrPortfolio(PORTFOLIOS[nextPortfolioIndex]);
              }}
            >
              <FaChevronRight size={ARROW_SIZE} />
            </RightArrowWrapper>
          </>
        )}
        <AnimatePresence initial={false} custom={direction}>
          <PortfolioWrapper
            key={currPortfolio}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            custom={direction}
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 250, damping: 30 },
              opacity: { duration: 1.5 },
            }}
          >
            {desktop && <CarouselBg src={currPortfolioSvgBg} />}
            <Container maxWidth="md">
              <Typography variant="h5" align="center" className="highlight">
                {currPortfolio}
              </Typography>
              <Typography variant="body1" align="center">
                {currPortfolioDescription}
              </Typography>
              <Grid container spacing={5} justifyContent="center">
                <Grid item md={6} sm={6} xs={12}>
                  <Typography variant="h5" className="highlight" align="center">
                    Directors
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    {currPortfolioTeam.committee
                      && currPortfolioTeam.committee.map((member) => (
                        <Grid
                          item
                          container
                          justifyContent="center"
                          key={member.name}
                          md={12}
                          sm={12}
                          xs={12}
                        >
                          <Box maxWidth={!desktop ? '350px' : '100%'}>
                            <MemberCard
                              name={member.name}
                              bio={member.bio}
                              role={member.role}
                              email={member.email}
                              slack={member.slack}
                              discord={member.discord}
                              website={member.website}
                            />
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
                {currPortfolioTeam.subcommittee && currPortfolioTeam.subcommittee.length > 0 && (
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="h5" className="highlight" align="center">
                      Subcommittee
                    </Typography>
                    {currPortfolioTeam.subcommittee.map((member) => (
                      <Typography variant="body2" align="center" key={member.name}>
                        {member.name}
                      </Typography>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Container>
          </PortfolioWrapper>
        </AnimatePresence>
      </CarouselWrapper>
    </>
  );
};

export default PortfolioSubcommittee;
