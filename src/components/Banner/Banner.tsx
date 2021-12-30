import { Container, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.section`
  height: 55vh;
  width: 100%;
  color: var(--white);
  position: relative;

  & p {
    width: 50%;

    @media (max-width: 900px) {
      width: 70%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.5px) brightness(75%);
  position: absolute;
  top: 0;
  left: 0;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding-bottom: 10vh;
  position: relative;
  z-index: 10;
`;

interface BannerProps {
  img: string;
  title: string;
  description: string;
}

const Banner = ({ img, title, description }: BannerProps) => {
  const [firstWords, setFirstWords] = useState('');
  const [lastWord, setLastWord] = useState('');

  useEffect(() => {
    const words = title.split(' ');
    setLastWord(words.pop() || '');
    setFirstWords(words.join(' '));
  }, []);

  return (
    <BannerWrapper>
      <BannerImg src={img} />
      <Container style={{ height: '100%' }}>
        <BannerContent>
          <Typography variant="h1">
            {firstWords}
            &nbsp;
            <span className="highlight">{lastWord}</span>
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
