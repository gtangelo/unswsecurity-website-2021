import {
  GITHUB, RECORDING, ResourceYear, SLIDES,
} from 'types/Resource';

const RESOURCES_2020: ResourceYear = {
  year: 2020,
  resources: [
    {
      title: 'O-Week CTF',
      date: '10th February',
      event: 'https://facebook.com/event/627514168015220',
      description: 'Collection of our CTF files and challenges used in our 2020 O-Week CTF competition.',
      links: [
        {
          resourceType: GITHUB,
          href: 'https://github.com/unswsecuritysociety/2020-oweek-ctf',
        },
      ],
    },
    {
      title: 'Atlassian & SecSoc - Losing anime subscriptions to CSRF',
      date: '17th March',
      event: 'https://facebook.com/event/647419882680059',
      description: 'Join Colin from Atlassian on an adventure into the intricacies of CSRF, a pervasive yet simple web vulnerability that could delete your anime subscriptions (or worse).',
      links: [
        {
          resourceType: SLIDES,
          href: 'https://docs.google.com/presentation/d/1w2oyzIHQjAXLZAsbwDN3QrBqSMuptnonOIdmxMDYeXw',
        },
        {
          resourceType: RECORDING,
          href: 'https://drive.google.com/file/d/1K9CxO7DgcXhkwooV1LRQW8UuqrGZYtMC',
        },
      ],
    },
    {
      title: 'CSESoc x SecSoc Security Workshop',
      date: '20th July',
      event: 'https://facebook.com/event/745162566314260',
      description: 'This workshop is perfect for those interested in cybersecurity! You are sure to learn something new and sharpen your security skills.',
      links: [
        {
          resourceType: SLIDES,
          href: 'https://gist.github.com/abiramen/d1f730084fd41ca296d3895e738bf8bc',
        },
        {
          resourceType: RECORDING,
          href: 'https://www.youtube.com/watch?v=2g6WEbI8lM4&t=6735s',
        },
      ],
    },
    {
      title: 'CSESoc x SecSoc CTF',
      date: '25th July',
      description: 'CSESoc and SecSoc have partnered together to bring you an exciting capture the flag event!',
      event: 'https://facebook.com/event/2951826274854928',
      links: [
        {
          resourceType: GITHUB,
          href: 'https://github.com/unswsecuritysociety/2020-t2-collab-ctf',
        },
      ],
    },
  ],
};

export default RESOURCES_2020;
