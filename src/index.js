import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

// utilities
import * as serviceWorker from './serviceWorker';

// pages
import LandingPages from './pages/LandingPages/LandingPages'


ReactDOM.render(
    <Router
        basename="/upah.id/public"
    >
      <div>
        <Switch>
          <Route exact path="/" component={LandingPages} />
        </Switch>
      </div>
    </Router>,
    document.getElementById("root")
  );
  
  serviceWorker.unregister();
  
