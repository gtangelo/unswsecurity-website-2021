type Route = {
  title: string;
  route: string;
  children?: Route[];
};

export default Route;
