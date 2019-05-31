import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

// utilities
import * as serviceWorker from './serviceWorker';

// pages
import LandingPages from './pages/LandingPages/LandingPages'


// ReactDOM.render(
//     <Router
//         basename= {process.env.PUBLIC_URL}
//     >
//       <div>
//         <Switch>
//           <Route exact path="/" component={LandingPages} />
//         </Switch>
//       </div>
//     </Router>,
//     document.getElementById("root")
//   );
  
//   serviceWorker.unregister();
  
  ReactDOM.render(
    <Router>
        <div>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPages} />
        </div>
    </Router>,
    document.getElementById('root')
  );
  
  serviceWorker.unregister(); 
