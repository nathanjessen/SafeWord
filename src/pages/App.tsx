import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as paths from "../constants/routes";
import { Home } from "./index";
import "../styles/tailwind.output.css";

export default function App() {
  return (
    <div className='bg-red-600 dark:bg-red-900 flex flex-row h-screen overflow-hidden'>
      <Router>
        <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
          <Switch>
            <Route path={paths.ROUTE_DEFAULT} exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
