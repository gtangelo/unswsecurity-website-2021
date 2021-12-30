import { CommitteeTeam, EXECUTIVE, HEAD } from 'types/CommitteeMember';

const COMMITTEE_2019: CommitteeTeam = {
  year: 2019,
  executives: [
    {
      role: 'President',
      name: 'Vivian Dang',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'viv',
      email: 'vivian@unswsecurity.com',
    },
    {
      role: 'Vice President',
      name: 'Zac Ellis',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'zac',
      email: 'zac@unswsecurity.com',
    },
    {
      role: 'Arc Delegate',
      name: 'Joshua Kong',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'jk',
      email: 'joshua@unswsecurity.com',
    },
    {
      role: 'Treasurer (Jan - May)',
      name: 'Michael Yoo',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'msjyoo',
      email: 'michael@unswsecurity.com',
    },
    {
      role: 'Treasurer (Jun - Dec)',
      name: 'Niriksha Mutharia',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      email: 'niriksha@unswsecurity.com',
    },
    {
      role: 'Secretary',
      name: 'Vincent Chen',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'VineBalloon',
      email: 'vincent@unswsecurity.com',
    },
  ],
  committee: [
    {
      role: 'External CTF Head',
      slack: 'p.e.n.n.y',
      position: HEAD,
      name: 'Penny Le',
      email: 'penny@unswsecurity.com',
    },
    {
      role: 'Event and Workshop Head',
      slack: 'Flora pj Li',
      position: HEAD,
      name: 'Flora Li',
      email: 'flora@unswsecurity.com',
    },
    {
      role: 'Event and Workshop Head',
      slack: 'nhat286',
      position: HEAD,
      name: 'Eric Nguyen',
      email: 'eric@unswsecurity.com',
    },
    {
      role: 'Wellbeing Head',
      name: 'Andrew Carmichael',
      position: HEAD,
      email: 'andrewc@unswsecurity.com',
      slack: 'arc',
    },
  ],
};

export default COMMITTEE_2019;
