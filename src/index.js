import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./nav";
import Home from "./home";
import Services from "./services";
import Projects from "./projects";
import Contact from "./contact";

import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
