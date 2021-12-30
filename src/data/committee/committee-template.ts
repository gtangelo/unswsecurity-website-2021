import {
  CommitteeTeam, DIRECTOR, EVENTS, EXECUTIVE,
} from 'types/CommitteeMember';

const COMMITTEE_2021: CommitteeTeam = {
  year: 2021,
  executives: [
    {
      role: 'President',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'John Smith',
      slack: 'John',
      email: 'john@unswsecurity.com',
      discord: 'john#1234',
      website: '',
      bio: '',
    },
  ],
  committee: [
    {
      role: 'Events Director',
      position: DIRECTOR,
      portfolio: EVENTS,
      name: 'John Smith',
      slack: 'John',
      email: 'john@unswsecurity.com',
      discord: 'john#1234',
      website: '',
      bio: '',
    },
  ],
  subcommittee: [
    {
      name: 'John Smith',
      portfolio: EVENTS,
    },
  ],
};

export default COMMITTEE_2021;
