import { Grid, Typography } from '@material-ui/core';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import md5 from 'md5';
import { FaTimes } from 'react-icons/fa';
import MemberLinks from './MemberLinks';

const MemberBioModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MemberBioModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9000;
  opacity: 0.5;
`;

const MemberBioModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  max-width: 430px;
  width: 100%;
  min-height: 320px;
  background-color: var(--white);
  color: var(--black);
  padding: 30px;
  z-index: 10000;

  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const MemberImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  background-color: #ececec;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

interface MemberBioProps {
  toggle: Dispatch<SetStateAction<boolean>>;
  role: string;
  name: string;
  email?: string;
  slack?: string;
  discord?: string;
  website?: string;
  bio?: string;
}

const MemberBioModal = ({
  toggle,
  role,
  name,
  email,
  slack,
  discord,
  website,
  bio,
}: MemberBioProps) => {
  return (
    <MemberBioModalWrapper>
      <MemberBioModalBg onClick={() => toggle(false)} />
      <MemberBioModalContainer>
        <CloseBtnWrapper onClick={() => toggle(false)}>
          <FaTimes size={20} />
        </CloseBtnWrapper>
        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
            <MemberImg
              src={`https://www.gravatar.com/avatar/${
                email ? md5(email) : 'profile@unswsecurity.com'
              }.jpg?s=256&d=mm`}
              alt={name}
            />
          </Grid>
          <Grid item xs={8} md={8}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle2">{role}</Typography>
            <MemberLinks
              email={email}
              slack={slack}
              discord={discord}
              website={website}
              displayBioIcon={false}
            />
            <Typography variant="body2">{bio}</Typography>
          </Grid>
        </Grid>
      </MemberBioModalContainer>
    </MemberBioModalWrapper>
  );
};

export default MemberBioModal;
