import {
  CAREERS, CTF, EVENTS, MEDIA, PORTFOLIO, PROJECTS,
} from 'types/CommitteeMember';

const CURR_YEAR = 2021;
export const CURR_SPONSER_YEAR = CURR_YEAR;
export const CURR_TEAM_YEAR = CURR_YEAR;
export const PORTFOLIOS: PORTFOLIO[] = [EVENTS, CAREERS, CTF, MEDIA, PROJECTS];
export const CURR_DATE = '';
export const SHOW_PAST_EVENTS_MAX = 12;
export const SHOW_UPCOMING_EVENTS_MAX = 3;

export const NEWSLETTERS_BUCKET_URL = 'https://storage.googleapis.com/unswsecurity-website-data/newsletters-v2.json';
export const EVENTS_BUCKET_URL = 'https://storage.googleapis.com/unswsecurity-website-data/events-v2.json';
