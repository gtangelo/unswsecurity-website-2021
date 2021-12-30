type Sponsor = {
  name: string;
  href: string;
  description: string;
  logo: string;
  color: string;
};

export default Sponsor;

export type SponsorsLevel = {
  level: string;
  sponsors: Sponsor[];
};

export type SponsorsYear = {
  year: number;
  tiers: SponsorsLevel[];
};

export type Event = {
  id: number;
  name: string;
  description: string;
  location: string;
  img: string;
  start: string;
  end: string;
  canceled: boolean;
  href: string;
};
