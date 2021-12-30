import { Typography } from '@material-ui/core';
import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import { ResourceLink } from 'types/Resource';

const ResourceCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResourceHeader = styled.div`
  margin-bottom: 10px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-bottom: -15px;
  & > * {
    margin-right: 10px;
    margin-bottom: 15px;
  }
`;

interface ResourceCardProps {
  title: string;
  date?: string;
  event?: string;
  description?: string;
  links: ResourceLink[];
}

const ResourceCard = ({
  title, date, event, links, description,
}: ResourceCardProps) => {
  return (
    <ResourceCardWrapper>
      <ResourceHeader>
        <Typography variant="h6">{title}</Typography>
        {date && <Typography variant="subtitle1">{date}</Typography>}
        {description && <Typography variant="body2">{description}</Typography>}
      </ResourceHeader>
      <LinksWrapper>
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            <Button>{link.resourceType}</Button>
          </a>
        ))}
        {event && (
          <a href={event} target="_blank" rel="noreferrer">
            <Button>More Info</Button>
          </a>
        )}
      </LinksWrapper>
    </ResourceCardWrapper>
  );
};

export default ResourceCard;
