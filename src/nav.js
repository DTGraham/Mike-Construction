import React from "react";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-right">
          <a class="navbar-brand" href="#">
            Michael Earnest Rusk
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link active" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>

              <Link class="nav-item nav-link active" to="/services">
                Services <span class="sr-only">(current)</span>
              </Link>
              <Link class="nav-item nav-link active" to="/projects">
                Projects <span class="sr-only">(current)</span>
              </Link>
              <Link class="nav-item nav-link active" to="/contact">
                Contact <span class="sr-only">(current)</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
