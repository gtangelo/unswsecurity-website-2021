import {
  ACCENTURE,
  ASSETNOTE,
  ATLASSIAN,
  CYBERCX,
  GOOGLE,
  HACKERONE,
  HACKLABS,
  PURESECURITY,
  SECLOVE,
  SKYLIGHTCYBER,
  TESSERENT,
} from './sponsorsData';

const SPONSORS = [
  {
    year: 2018,
    tiers: [
      {
        level: 'Gold',
        sponsors: [HACKLABS],
      },
      {
        level: 'Silver',
        sponsors: [GOOGLE],
      },
    ],
  },
  {
    year: 2019,
    tiers: [
      {
        level: 'Platinum',
        sponsors: [HACKLABS],
      },
      {
        level: 'Gold',
        sponsors: [HACKERONE, ATLASSIAN],
      },
      {
        level: 'Silver',
        sponsors: [ACCENTURE],
      },
    ],
  },
  {
    year: 2020,
    tiers: [
      {
        level: 'Platinum',
        sponsors: [GOOGLE, PURESECURITY, ATLASSIAN, SKYLIGHTCYBER],
      },
    ],
  },
  {
    year: 2021,
    tiers: [
      {
        level: 'Platinum',
        sponsors: [GOOGLE, TESSERENT, SKYLIGHTCYBER],
      },
      {
        level: 'Gold',
        sponsors: [SECLOVE, ASSETNOTE],
      },
      {
        level: 'Silver',
        sponsors: [ATLASSIAN, CYBERCX],
      },
    ],
  },
];

export default SPONSORS;
