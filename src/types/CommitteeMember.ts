type CommitteeMember = {
  role: string;
  position:
  | typeof EXECUTIVE
  | typeof HEAD
  | typeof COMMITTEE
  | typeof DIRECTOR
  | typeof SUBCOMMITTEE;
  portfolio?: PORTFOLIO | typeof EXECUTIVE;
  name: string;
  email?: string;
  slack?: string;
  discord?: string;
  website?: string;
  bio?: string;
};

export type SubcommitteeMember = {
  name: string;
  portfolio: PORTFOLIO;
};

export type SubcommitteePortfolio = {
  portfolio: PORTFOLIO;
  subcommittee: SubcommitteeMember[];
};

export type PORTFOLIO =
  | typeof CTF
  | typeof PROJECTS
  | typeof EVENTS
  | typeof MEDIA
  | typeof CAREERS;

export type CommitteeTeam = {
  year: number;
  executives: CommitteeMember[];
  committee?: CommitteeMember[];
  subcommittee?: SubcommitteeMember[];
};

export const EXECUTIVE = 'Executives';
export const HEAD = 'Heads';
export const COMMITTEE = 'Committee';
export const DIRECTOR = 'Directors';
export const SUBCOMMITTEE = 'Subcommittee';

export const CTF = 'CTF';
export const PROJECTS = 'Projects';
export const EVENTS = 'Events';
export const MEDIA = 'Media';
export const CAREERS = 'Careers';
