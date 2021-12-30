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

export interface EventResponse {
  events: Event[];
}
