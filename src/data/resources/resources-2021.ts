import {
  GITHUB, RECORDING, ResourceYear, SLIDES,
} from 'types/Resource';

const RESOURCES_2021: ResourceYear = {
  year: 2021,
  resources: [
    {
      title: 'O-Week CTF',
      date: '8th February',
      event: 'https://facebook.com/event/450339009652084',
      description:
        'Collection of our CTF files and challenges used in our 2021 O-Week CTF competition.',
      links: [
        {
          resourceType: GITHUB,
          href: 'https://github.com/unswsecuritysociety/2021-oweek-ctf',
        },
      ],
    },
    {
      title: 'Skylight Cyber: Defeating AI in Endpoint Protection',
      date: '3rd March',
      event: 'https://facebook.com/event/2853576781577197',
      description:
        "Workshop resources from one of Skylight Cyber's talk discussing their research to reversed engineer Cylance's AI based EPP to create a unique and amusing bypass",
      links: [
        {
          resourceType: SLIDES,
          href: 'https://skylightcyber.com/2019/07/18/cylance-i-kill-you/Cylance%20-%20Adversarial%20Machine%20Learning%20Case%20Study.pdf',
        },
        {
          resourceType: RECORDING,
          href: 'https://www.youtube.com/watch?v=LmfaSKZx6ms&t=1478s',
        },
      ],
    },
    {
      title: 'Atlassian: Women in Security Talk',
      date: '15th March',
      event: 'https://facebook.com/event/765921411018979',
      description:
        'Atlassian is holding a talk on women working in the cybersecurity industry - come along and ask them all your questions, as our two lovely presenters share tips and experiences on navigating a male-dominated workforce.',
      links: [
        {
          resourceType: RECORDING,
          href: 'https://www.youtube.com/watch?v=JR7lSmk9KyQ',
        },
      ],
    },
    {
      title: 'Skylight Cyber X SecSoc CTF',
      date: '25th June',
      event: 'https://facebook.com/event/499267448340049',
      description:
        'Collection of our CTF files and challenges used in our CTF collaboration with Skylight Cyber.',
      links: [
        {
          resourceType: GITHUB,
          href: 'https://github.com/unswsecuritysociety/21t2-skylight-ctf',
        },
      ],
    },
    {
      title: 'GIE Club x SecSoc - Intro to Cyber Security Workshop',
      date: '7th July',
      description:
        'Recording of the July 7th Intro to Cyber Security Workshop presented by the Security Society of UNSW in collaboration with the UNSW Girls in Engineering Club.',
      links: [
        {
          resourceType: RECORDING,
          href: 'https://www.youtube.com/watch?v=IFLUcgTjc4E&t=2651s',
        },
      ],
    },
    {
      title: 'Newbie CTF Comp x SecSoc',
      date: '23rd July',
      event: 'https://facebook.com/event/3208729979452105',
      description:
        'Collection of our CTF files and challenges used in our CTF competition aimed towards newbies, in collaboration with CSESoc',
      links: [
        {
          resourceType: GITHUB,
          href: 'https://github.com/unswsecuritysociety/21t2-secsoc-x-csesoc-newbie-ctf',
        },
      ],
    },
  ],
};

export default RESOURCES_2021;
