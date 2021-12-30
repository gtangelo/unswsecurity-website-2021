import { Container, Grid, Typography } from '@material-ui/core';
import ResourceCard from 'components/ResourceCard';
import RESOURCES from 'data/resources/resources';
import React from 'react';
import styled from 'styled-components';

const ResourceListWrapper = styled.div`
  margin: var(--section-margin);
`;

const ResourceYearWrapper = styled.div`
  margin: var(--section-margin);
`;

const ResourcesList = () => {
  return (
    <ResourceListWrapper>
      <Container>
        <Typography variant="h3" align="center">
          <span className="highlight">Workshops & CTF</span>
          &nbsp;Resources
        </Typography>
        <Typography variant="body1" align="center">
          View our past resources from workshops to CTF competitions. You can find past recordings
          of events, workshop slides or links to our previous CTF files on Github!
        </Typography>
        {RESOURCES.sort((a, b) => b.year - a.year).map((resourcesYear) => (
          <ResourceYearWrapper key={resourcesYear.year}>
            <Typography variant="h4">
              <span className="highlight">{resourcesYear.year}</span>
              &nbsp;Resources
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              {resourcesYear.resources.reverse().map((resource) => (
                <Grid item md={4} sm={6} xs={12} key={resource.title}>
                  <ResourceCard
                    title={resource.title}
                    event={resource.event}
                    description={resource.description}
                    date={resource.date && `${resource.date} ${resourcesYear.year}`}
                    links={resource.links}
                  />
                </Grid>
              ))}
            </Grid>
          </ResourceYearWrapper>
        ))}
      </Container>
    </ResourceListWrapper>
  );
};

export default ResourcesList;
