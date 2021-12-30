import Route from 'types/Route';

const ROUTES: Route[] = [
  {
    title: 'About',
    route: '/about/team',
    children: [
      {
        title: 'Our Team',
        route: '/about/team',
      },
      {
        title: 'Previous Committee',
        route: '/about/previous-committee',
      },
      {
        title: 'Constitution',
        route: '/about/constitution',
      },
      {
        title: 'Grievance Policy',
        route: '/about/grievance-policy',
      },
    ],
  },
  {
    title: 'Events',
    route: '/events',
  },
  {
    title: 'Sponsors',
    route: '/sponsors',
    children: [
      {
        title: 'Our Sponsors',
        route: '/sponsors',
      },
      {
        title: 'Past Sponsors',
        route: '/sponsors/past-sponsors',
      },
    ],
  },
  {
    title: 'Newsletters',
    route: '/publications/newsletters',
    // children: [
    //   {
    //     title: 'Blogs',
    //     route: '/publications/blogs',
    //   },
    //   {
    //     title: 'Newsletter',
    //     route: '/publications/newsletter',
    //   },
    // ],
  },
  {
    title: 'Resources',
    route: '/resources',
  },
  // {
  //   title: 'Dev: Typography',
  //   route: '/typography',
  // },
];

export default ROUTES;
