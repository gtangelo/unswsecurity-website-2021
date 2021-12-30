import { CommitteeTeam, EXECUTIVE } from 'types/CommitteeMember';

const COMMITTEE_2015: CommitteeTeam = {
  year: 2015,
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
      role: 'Treasurer',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Harry J.E. Day',
    },
    {
      role: 'Secretary',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Brad Lorge',
    },
    {
      role: 'Arc Delegate',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Weilon Ying',
      slack: 'whale',
      email: 'weilon@unswsecurity.com',
    },
  ],
};

export default COMMITTEE_2015;
