import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';
import Button from 'components/Button';
import { Typography } from '@material-ui/core';

type SponsorCardWrapperProps = {
  color: string;
};

const SponsorCardWrapper = styled(motion.div)<SponsorCardWrapperProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 25px 0;
`;

const SponsorContainer = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  min-height: 300px;
`;

const SponsorContent = styled.div`
  & > * {
    margin-bottom: 30px;
  }
`;

const SponsorLogo = styled.img`
  height: 75px;
  width: 100%;
  object-fit: contain;
`;

const SponsorDescription = styled.div`
  width: 100%;
  text-align: center;
`;

const SponsorBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface SponsorCardProps {
  color: string;
  logo: string;
  name: string;
  href: string;
  description: string;
}

const SponsorCard = ({
  color, logo, name, description, href,
}: SponsorCardProps) => {
  return (
    <SponsorCardWrapper color={color}>
      <SponsorContainer>
        <SponsorContent>
          <SponsorLogo src={logo} alt={name} />
          <SponsorDescription>
            <Typography variant="body2">{description}</Typography>
          </SponsorDescription>
        </SponsorContent>
        <SponsorBtnWrapper>
          <a href={href} target="_blank" rel="noreferrer">
            <Button>Learn More</Button>
          </a>
        </SponsorBtnWrapper>
      </SponsorContainer>
    </SponsorCardWrapper>
  );
};

export default SponsorCard;
