import { CommitteeTeam, EXECUTIVE, HEAD } from 'types/CommitteeMember';

const COMMITTEE_2016: CommitteeTeam = {
  year: 2016,
  executives: [
    {
      role: 'President',
      name: 'Andrew Bennett',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'andrew',
      email: 'andrew@unswsecurity.com',
    },
    {
      role: 'Arc Delegate',
      name: 'Weilon Ying',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'whale',
      email: 'weilon@unswsecurity.com',
    },
    {
      role: 'Secretary',
      name: 'Daniel Phillips',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'deeps',
      email: 'dp@unswsecurity.com',
    },
    {
      role: 'Treasurer',
      name: 'Harry J.E. Day',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
    },
  ],
  committee: [
    {
      role: 'Sponsorhip Head',
      name: 'Sean Yeoh',
      position: HEAD,
      slack: 'sy',
      email: 'sean@unswsecurity.com',
    },
    {
      role: 'CTF Head',
      name: 'Curtis Millar',
      position: HEAD,
      slack: 'studley13',
      email: 'curtis@unswsecurity.com',
      website: 'http://teamred.rocks/',
      bio: 'Being fairly new to the security scene, I have only really been involved with cyber security from the start of 2016. During that year, I studied security engineering and became the CTF head for the UNSW Security Society, organising the large CTFs that the society produced internally. During 2017, I have been studying web application security and have become the secretary for the society, continuing to help in all aspects of running the society.',
    },
    {
      role: 'CTF Head',
      name: 'Jordan Brown',
      position: HEAD,
      slack: 'paste_bin',
    },
  ],
};

export default COMMITTEE_2016;
