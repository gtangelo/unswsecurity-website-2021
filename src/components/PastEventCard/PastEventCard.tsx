import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from 'components/Button';

interface EventCardProps {
  name: string;
  description: string;
  location: string;
  img: string;
  start: string;
  end: string;
  href: string;
}

const CardWrapper = styled.div`
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBody = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardContent = styled.div`
  padding: 20px;
  width: 100%;
  padding-bottom: 0;
  word-wrap: break-word;
`;

const CardBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const PastEventCard = ({
  name, description, img, location, start, end, href,
}: EventCardProps) => {
  const options = { hour: 'numeric', minute: '2-digit', seconds: 'none' };
  return (
    <CardWrapper>
      <CardBody>
        <CardImg src={img} alt={name} />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">
            @&nbsp;
            {location}
          </Typography>
          <Typography variant="subtitle2">
            {`${new Date(start).toDateString()} ${new Date(start).toLocaleTimeString(
              'en-US',
              options,
            )}`}
            {end
              && new Date(start).toDateString() !== new Date(end).toDateString()
              && ` - ${new Date(end).toDateString()}`}
          </Typography>
          <Typography variant="body2" component="p">
            {description.substring(
              0,
              Math.min(description.length, description.lastIndexOf(' ', 200)),
            )}
            ...
          </Typography>
        </CardContent>
      </CardBody>
      <CardBtnWrapper>
        <a href={href} target="_blank" rel="noreferrer">
          <Button>View Details</Button>
        </a>
      </CardBtnWrapper>
    </CardWrapper>
  );
};

export default PastEventCard;
