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
//     </Router>
//     document.getElementById("root")
//   );
  
//   serviceWorker.unregister();
  
// ReactDOM.render(
//   <Router basename= {process.env.PUBLIC_URL}>
//       <div>
//         <Route exact path='/' component={LandingPages} />
//       </div>
//   </Router>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

ReactDOM.render(<LandingPages />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
