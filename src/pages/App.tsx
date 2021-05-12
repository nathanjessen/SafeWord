import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as paths from "../constants/routes";
import { Home } from "./index";
import "../styles/tailwind.output.css";
import { Footer } from "../components";

export default function App() {
  return (
    <div className=''>
      <Router>
        <div className='flex flex-col flex-1 min-h-0'>
          <Switch>
            <Route path={paths.ROUTE_DEFAULT} exact component={Home} />
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}
