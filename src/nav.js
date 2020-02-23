import React from "react";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning rounded">
          <a class="navbar-brand" href="#">
            Michael Earnest Rusk
          </a>
          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/home">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/projects">
                Projects <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/contact">
                Contact <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
