import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  FaSlack, FaDiscord, FaEnvelope, FaAlignJustify, FaCode,
} from 'react-icons/fa';

const MemberLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px -7px;

  & > * {
    margin: 5px;
  }
`;

const LinkButton = styled.a`
  background-color: #ececec;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

interface MemberLinksProps {
  email?: string;
  slack?: string;
  discord?: string;
  website?: string;
  bio?: string;
  setShowBio?: Dispatch<SetStateAction<boolean>>;
  displayBioIcon?: boolean;
}

const MemberLinks = ({
  slack,
  email,
  discord,
  website,
  bio,
  setShowBio,
  displayBioIcon,
}: MemberLinksProps) => {
  let showSlack = true;
  if (!slack || (email && slack && discord && website)) showSlack = false;
  const imgSize = 15;
  const INFORMATION = [
    {
      name: 'Email',
      href: email ? `mailto:${email}` : '',
      component: <FaEnvelope size={imgSize} />,
    },
    {
      name: 'Slack',
      href: showSlack && slack ? `https://seceduau.slack.com/messages/${slack}` : '',
      component: <FaSlack size={imgSize} />,
    },
    {
      name: 'Discord',
      href: discord ? `https://discordapp.com/users/${discord}` : '',
      component: <FaDiscord size={imgSize} />,
    },
    {
      name: 'Website',
      href: website,
      component: <FaCode size={imgSize} />,
    },
  ];

  return (
    <MemberLinksWrapper>
      {INFORMATION.filter((link) => link.href).map((link) => (
        <LinkButton href={link.href} key={link.name} target="_blank" rel="noreferrer">
          {link.component}
        </LinkButton>
      ))}
      {bio && displayBioIcon && (
        <LinkButton as="div" onClick={() => setShowBio((prevState) => !prevState)}>
          <FaAlignJustify size={imgSize} />
        </LinkButton>
      )}
    </MemberLinksWrapper>
  );
};

export default MemberLinks;
