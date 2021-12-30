import { CommitteeTeam, EXECUTIVE, HEAD } from 'types/CommitteeMember';

const COMMITTEE_2018: CommitteeTeam = {
  year: 2018,
  executives: [
    {
      role: 'President',
      name: 'Sean Yeoh',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'sy',
      email: 'sean@unswsecurity.com',
    },
    {
      role: 'Vice President',
      name: 'Jessica Hodges',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'raeyra',
      email: 'jessica@unswsecurity.com',
    },
    {
      role: 'Arc Delegate',
      name: 'Zac Ellis',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'top_hat',
      email: 'zac@unswsecurity.com',
    },
    {
      role: 'Treasurer',
      name: 'Michael Yoo',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'msjyoo',
      email: 'michael@unswsecurity.com',
    },
    {
      role: 'Secretary',
      name: 'Colin Xu',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'bluecicada',
      email: 'colin@unswsecurity.com',
    },
  ],
  committee: [
    {
      role: 'External CTF Head',
      name: 'Ka Wing Ho',
      position: HEAD,
      slack: 'wingz',
      email: 'kawing@unswsecurity.com',
    },
    {
      role: 'Media, Publicity & Merchandise Head',
      name: 'Vivian Dang',
      position: HEAD,
      slack: 'viv',
      email: 'vivian@unswsecurity.com',
    },
    {
      role: 'Media, Publicity & Merchandise Head',
      name: 'Weilon Ying',
      position: HEAD,
      slack: 'whale',
      email: 'weilon@unswsecurity.com',
    },
    {
      role: 'Social Events Head',
      name: 'Evan Kohilas',
      position: HEAD,
      slack: 'evan',
      email: 'evan@unswsecurity.com',
    },
    {
      role: 'Wellbeing Head',
      name: 'Zain Afzal',
      position: HEAD,
      email: 'zain@unswsecurity.com',
      slack: ';)',
    },
    {
      role: 'Workshop Head',
      name: 'Sketch',
      position: HEAD,
      slack: 'sentimence',
      email: 'sketch@unswsecurity.com',
    },
  ],
};

export default COMMITTEE_2018;
