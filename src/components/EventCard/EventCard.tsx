import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
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
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
`;

const CardBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const EventCard = ({
  name, description, img, location, start, end, href,
}: EventCardProps) => {
  const options = { hour: '2-digit', minute: '2-digit', seconds: 'none' };

  return (
    <CardWrapper>
      <Grid container>
        <Grid item md={5} sm={12} xs={12}>
          <CardImg src={img} alt={name} />
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <CardBody>
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
                  && ` - ${new Date(end).toDateString()} ${new Date(end).toLocaleTimeString(
                    'en-US',
                    options,
                  )}`}
              </Typography>
              <Typography variant="body2">
                {description.substring(
                  0,
                  Math.min(description.length, description.lastIndexOf(' ', 220)),
                )}
                ...
              </Typography>
            </CardContent>
            <CardBtnWrapper>
              <a href={href} target="_blank" rel="noreferrer">
                <Button>View Details</Button>
              </a>
            </CardBtnWrapper>
          </CardBody>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default EventCard;
