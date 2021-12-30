export type ResourceLink = {
  resourceType: typeof SLIDES | typeof RECORDING | typeof GITHUB;
  href: string;
};

type Resource = {
  title: string;
  date?: string;
  event?: string;
  description?: string;
  links: ResourceLink[];
};

export type ResourceYear = {
  year: number;
  resources: Resource[];
};

export const SLIDES = 'Slides';
export const RECORDING = 'Recording';
export const GITHUB = 'Github';
