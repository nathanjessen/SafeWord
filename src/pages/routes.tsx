import { Home } from "./index";
import * as paths from "../constants/routes";

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: "Home",
    Component: Home,
    exact: true,
  },
];

export default routes;
