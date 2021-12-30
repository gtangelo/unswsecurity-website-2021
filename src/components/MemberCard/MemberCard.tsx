import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import md5 from 'md5';
import MemberLinks from './MemberLinks';

const MemberCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  color: var(--black);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;
  padding: 20px;
`;

const MemberImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const MemberCardImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 5px;
`;

const MemberCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

interface MemberCardProps {
  role: string;
  name: string;
  email?: string;
  slack?: string;
  discord?: string;
  website?: string;
  bio?: string;
}

const MemberCard = ({
  role, name, email, slack, discord, website, bio,
}: MemberCardProps) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <MemberCardWrapper>
      {showBio && (
        <Dialog open={showBio} onClose={() => setShowBio(false)}>
          <DialogTitle>{name}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{bio}</DialogContentText>
          </DialogContent>
        </Dialog>
      )}
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={4} sm={4} xs={5}>
          <MemberCardImgWrapper>
            <MemberImg
              src={`https://www.gravatar.com/avatar/${
                email ? md5(email) : 'profile@unswsecurity.com'
              }.jpg?s=256&d=mm`}
              alt={name}
            />
          </MemberCardImgWrapper>
        </Grid>
        <Grid item md={8} sm={8} xs={7}>
          <MemberCardBody>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle2">{role}</Typography>
            <MemberLinks
              email={email}
              slack={slack}
              discord={discord}
              website={website}
              bio={bio}
              setShowBio={setShowBio}
              displayBioIcon
            />
          </MemberCardBody>
        </Grid>
      </Grid>
    </MemberCardWrapper>
  );
};

export default MemberCard;
