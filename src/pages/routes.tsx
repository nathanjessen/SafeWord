import * as paths from '../constants/routes';
import Home from './Home';

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: 'Home',
    Component: Home,
    exact: true,
  },
];

export default routes;
