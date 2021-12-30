import { CommitteeTeam, EXECUTIVE, HEAD } from 'types/CommitteeMember';

const COMMITTEE_2017: CommitteeTeam = {
  year: 2017,
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
      role: 'Vice President',
      name: 'Daniel Phillips',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'deeps',
      email: 'dp@unswsecurity.com',
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
      role: 'Treasurer',
      name: 'Sean Yeoh',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'sy',
      email: 'sean@unswsecurity.com',
    },
    {
      role: 'Secretary',
      name: 'Curtis Millar',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      slack: 'studley13',
      email: 'curtis@unswsecurity.com',
      website: 'http://teamred.rocks/',
      bio: 'Being fairly new to the security scene, I have only really been involved with cyber security from the start of 2016. During that year, I studied security engineering and became the CTF head for the UNSW Security Society, organising the large CTFs that the society produced internally. During 2017, I have been studying web application security and have become the secretary for the society, continuing to help in all aspects of running the society.',
    },
  ],
  committee: [
    {
      role: 'Community Head',
      name: 'Clancy Rye',
      position: HEAD,
      slack: 'gibs',
      email: 'clancy@unswsecurity.com',
    },
    {
      role: 'Internal CTF Head',
      name: 'Mitchell Shelton',
      position: HEAD,
      slack: 'mitty',
      email: 'mitchell@unswsecurity.com',
    },
    {
      role: 'External CTF Head',
      name: 'Luke Cusack',
      position: HEAD,
      slack: 'ljc',
      email: 'luke@unswsecurity.com',
    },
    {
      role: 'External CTF Head',
      name: 'Glenn McGuire',
      position: HEAD,
      slack: 'glem',
      email: 'glenn@unswsecurity.com',
    },
    {
      role: 'Workshop Head',
      name: 'Cameron Lonsdale',
      position: HEAD,
      slack: 'clonsdale',
      email: 'cameron@unswsecurity.com',
    },
  ],
};

export default COMMITTEE_2017;
