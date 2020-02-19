import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Services from "./services";
import Projects from "./projects";
import Contact from "./contact";
import ProjectOne from "./project-1";
import ProjectTwo from "./project-2";
import ProjectThree from "./project-3";
import ProjectFour from "./project-4";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/project-one" component={ProjectOne} />
      <Route path="/project-two" component={ProjectTwo} />
      <Route path="/project-three" component={ProjectThree} />
      <Route path="/project-four" component={ProjectFour} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
