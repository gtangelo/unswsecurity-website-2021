import {
  CAREERS,
  CommitteeTeam,
  CTF,
  DIRECTOR,
  EVENTS,
  EXECUTIVE,
  MEDIA,
  PROJECTS,
} from 'types/CommitteeMember';

const COMMITTEE_2021: CommitteeTeam = {
  year: 2021,
  executives: [
    {
      role: 'President',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Giuliana De Bellis',
      slack: 'Giuliana De Bellis',
      email: 'giuliana@unswsecurity.com',
      discord: 'Giuliana#3560',
      bio: 'Hey hey! I study Computer Science, and became interested in security after discovering CTFs and crypto challenges. In my spare time you can find me dancing, singing, cooking or doing some odd combination of all three :)',
    },
    {
      role: 'Vice-President',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Ada Luong',
      slack: 'ada',
      email: 'ada@unswsecurity.com',
      discord: '',
      bio: "Hello!! I'm in my second year studying computer science and law. I was initially enticed into security by the buzzzz of solving cryptography challenges and Richard Buckland's open day talks 👀. Since joining SecSoc, I've realised how much more to security there is! Learning from the people around me and sharing some of what I've learnt with others has been an ✨absolute vibe✨. Also, I'm a massive Hamilton the Musical fan.",
    },
    {
      role: 'Secretary',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Michael Gribben',
      slack: 'gribbenator',
      email: 'mgribben@unswsecurity.com',
      discord: 'piddlingtuna#0046',
      bio: "Hello :DD I'm a 3rd year Computer Science student and I'm the Secretary! I handle our external communication (stuff like emails, facebook messages, etc to the society) and organise internal meetings! I got into security since it's everywhere - once you start paying attention, you realise just how insecure the entire world is. My fun fact is that my gmail password is 234ndslk32JW@2.",
    },
    {
      role: 'Treasurer (Dec - Apr)',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Tom Nguyen',
      slack: 'tom',
      email: 'tom@unswsecurity.com',
      discord: '',
      website: 'https://tomn.me',
      bio: "Yo, I'm currently in my third year of Computer Science. Computer security is an interesting field for me as it is one of the more practical fields of Computer Science. If I’m not coding, you’ll probably find me messing about with random ingredients in the kitchen, or growing plants inside bottles.",
    },
    {
      role: 'Treasurer (Apr - Present)',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Abiram Nadarajah',
      slack: 'Abiram',
      email: 'abiram@unswsecurity.com',
      discord: 'abiramen#2452',
      website: 'https://www.abiram.me',
      bio: "Hello! I'm a 2nd year student, and I became interested in security after discovering Tom Scott's Computerphile videos in my younger days. If you ever see me not eating ramen, I'm probably craving it :)",
    },
    {
      role: 'Arc-Delegate',
      position: EXECUTIVE,
      portfolio: EXECUTIVE,
      name: 'Vicknesh Ravikumar',
      slack: 'Vicknesh Ravikumar',
      email: 'vicknesh@unswsecurity.com',
      discord: 'ItsViggo#3677',
      bio: 'Yo! I’m a second year software engineering student and I became interested in security after doing a couple of CTF’s … and watching Mr. Robot.  If I’m not coding, you’ll probably find me shooting hoops, playing the piano, watching Netflix or playing video games. Hit me up on the Discord if you want to play Warzone :).',
    },
  ],
  committee: [
    {
      role: 'CTF Director',
      position: DIRECTOR,
      portfolio: CTF,
      name: 'Abiram Nadarajah',
      slack: 'Abiram',
      email: 'abiram@unswsecurity.com',
      discord: 'abiramen#2452',
      website: 'https://www.abiram.me',
      bio: "Hello! I'm a 2nd year student, and I became interested in security after discovering Tom Scott's Computerphile videos in my younger days. If you ever see me not eating ramen, I'm probably craving it :)",
    },
    {
      role: 'CTF Director',
      position: DIRECTOR,
      portfolio: CTF,
      name: 'Atharv Damle',
      email: 'atharv@unswsecurity.com',
      discord: 'Sequeli#2326',
      website: 'https://atharvdamle.com',
      bio: "Hello hello! I'm a 3rd year Software Engineering student, who loves looking into practical security concepts. Inspired by Hollywood, I still strive to code at 300wpm on 8 terminals simultaneously as hack my way into NSA :P Besides coding, I also enjoy my cycling, bouldering and chess. Feel free to hit me up for a game of blitz :)",
    },
    {
      role: 'Careers Director',
      position: DIRECTOR,
      portfolio: CAREERS,
      name: 'Kyu-Sang Kim',
      email: 'kyusang@unswsecurity.com',
      discord: 'hexDoor#0001',
      bio: "Hi! I'm a 4th year Software Engineering student and I became interested in computer security when I wanted to learn about video game hacks and how they interacted with the computer to create the desired effect. I haven't had the opportunity to develop a hack for a popular esports title but maybe one day...",
    },
    {
      role: 'Careers Director',
      position: DIRECTOR,
      portfolio: CAREERS,
      name: 'Michelle Wong',
      email: 'michelle.wong@unswsecurity.com',
      discord: 'michigan#4917',
      bio: '',
    },
    {
      role: 'Events Director',
      position: DIRECTOR,
      portfolio: EVENTS,
      name: 'Nicholas Tandiono',
      slack: 'N_Tandiono',
      email: 'nicholas@unswsecurity.com',
      discord: 'Beta#8483',
      website: 'https://n-tandiono.github.io/',
      bio: "Hello! I'm Nicholas, a second year Computer Science/Commerce student who loves to decrypt and encrypt stuff. If I'm ever free, you'll see me scroll through different discord servers or watch YouTube learning new stuff… Message me if you ever need help, or wanna play a game of chess :). I may overuse emojis.",
    },
    {
      role: 'Events Director',
      position: DIRECTOR,
      portfolio: EVENTS,
      name: 'Amanda Liu',
      email: 'amanda@unswsecurity.com',
      discord: 'AL1305#1133',
      bio: "Hi!!! I'm a 2nd year computer science student. I became interested in security engineering as I have always been mystified by the concept of hackers and I love a good spy movie! In my spare time, I enjoy watching true crime documentaries and discovering new restaurants!",
    },
    {
      role: 'Media Director',
      position: DIRECTOR,
      portfolio: MEDIA,
      name: 'Cherise Hoang',
      slack: 'cherise',
      email: 'cherise@unswsecurity.com',
      discord: 'psychicpeasant#0356',
      bio: "Hi!! :) I’m a Software Engineering gal, and I love a good challenge! I was first interested in security when I realised I was obsessed with spy/action movies…and wanted to see how accurate the depictions were :”) If I'm not sleeping, you can find me spending hours figuring out bugs 🐛 in Minecraft plugins, letting out my creative juices as a photographer 📸, or hitting balls 🎾on the tennis court! Feel free to message me with anything :)",
    },
    {
      role: 'Media Director',
      position: DIRECTOR,
      portfolio: MEDIA,
      name: 'Yinyee Ho',
      email: 'yinyee@unswsecurity.com',
      discord: 'ineemeenie#9397',
      bio: "Hello! My security interest started when I watched one of Richard Buckland's talks on YouTube and, I enjoyed spy/action/thriller movies growing up. During my spare time, I'm usually watching food vlogs, cafe hopping, or taking landscapes photographs.",
    },
    {
      role: 'Projects Director',
      position: DIRECTOR,
      portfolio: PROJECTS,
      name: 'Gabriel Ting',
      slack: 'Gabriel Ting',
      email: 'gabriel@unswsecurity.com',
      discord: 'gtangelo#6436',
      website: 'https://gabrielting.xyz/',
      bio: "Hi there! I'm a second year computer science student. My interest into security started when I first attended one of SecSoc's talks and got intrigued on how different people were able to get hacked. From that point on, I'm learning what security has to offer and exploring my interest into the field (such as what a CTF is :P). You'll often find in my spare time coding for fun or watching online videos about coding :)",
    },
  ],
  subcommittee: [
    {
      name: 'Cameron Huang',
      portfolio: EVENTS,
    },
    {
      name: 'Brian Huang',
      portfolio: EVENTS,
    },
    {
      name: 'Timmy Huang',
      portfolio: EVENTS,
    },
    {
      name: 'Jayden Leung',
      portfolio: EVENTS,
    },
    {
      name: 'Priscilla Soo',
      portfolio: EVENTS,
    },
    {
      name: 'Chantelle Sun',
      portfolio: CAREERS,
    },
    {
      name: 'Ramana Paheerathan',
      portfolio: CAREERS,
    },
    {
      name: 'Damjan Stevanoski',
      portfolio: CTF,
    },
    {
      name: 'Frank Nguyen',
      portfolio: CTF,
    },
    {
      name: 'Dhruv Agrawal',
      portfolio: CTF,
    },
    {
      name: 'Trinity Ridley-Smith',
      portfolio: CTF,
    },
    {
      name: 'Kevin Zhu',
      portfolio: CTF,
    },
    {
      name: 'Josh Harcombe',
      portfolio: CTF,
    },
    {
      name: 'Paula Tennent',
      portfolio: MEDIA,
    },
    {
      name: 'Ingrid Norton',
      portfolio: MEDIA,
    },
    {
      name: 'Christian Ilagan',
      portfolio: MEDIA,
    },
    {
      name: 'Jacky Xie',
      portfolio: PROJECTS,
    },
    {
      name: 'Aisha Nauman',
      portfolio: PROJECTS,
    },
    {
      name: 'Gabriella Hartanto',
      portfolio: PROJECTS,
    },
    {
      name: 'Etkin Tetik',
      portfolio: PROJECTS,
    },
    {
      name: 'Justin Or',
      portfolio: PROJECTS,
    },
  ],
};

export default COMMITTEE_2021;
