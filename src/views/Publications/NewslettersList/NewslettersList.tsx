import { Box, Container, Typography } from '@material-ui/core';
import axios from 'axios';
import Button from 'components/Button';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Newsletter from 'types/Newsletter';
import { NEWSLETTERS_BUCKET_URL } from 'utils/config';

const NewslettersListSection = styled.div`
  margin: var(--section-margin);
`;

const NewsletterItem = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: -1px;
  transition: all 0.1s ease-out;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.1s ease-in;
  }

  p {
    margin: 0;
  }
`;

const NewslettersList = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

  useEffect(() => {
    const updateNewslettersData: () => Promise<void> = async () => {
      const payload = await axios(NEWSLETTERS_BUCKET_URL);
      const { newsletters: newslettersData } = payload.data; // eslint-disable-line
      setNewsletters(newslettersData);
    };
    updateNewslettersData().catch((e) => console.log(e));
  }, []);

  return (
    <NewslettersListSection>
      <Container>
        <Typography variant="h3" align="center">
          Newsletters
        </Typography>
        <Typography variant="body1" align="center">
          Here's all the newsletters we've posted. Want to be notified when a new one comes out?
          Subscribe to our newsletters!
        </Typography>
        <Box width="100%" display="flex" my={5} justifyContent="center">
          <a href="https://unswsecurity.us11.list-manage.com/subscribe?u=21d2a75643767fe813c33a2e9&id=f55085a8a9">
            <Button>Subscribe to our Mailing List</Button>
          </a>
        </Box>
        {newsletters.map((newsletter) => (
          <a href={newsletter.link} target="_blank" rel="noreferrer" key={newsletter.title}>
            <NewsletterItem>
              <Typography variant="body2">{newsletter.title}</Typography>
            </NewsletterItem>
          </a>
        ))}
      </Container>
    </NewslettersListSection>
  );
};

export default NewslettersList;
