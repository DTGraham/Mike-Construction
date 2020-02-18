import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light  fixed-top">
        <div class="container">
          <div class="d-flex flex-grow-1">
            <p class="navbar-brand d-none d-lg-inline-block">
              Michael Earnest Rusk
            </p>
            <p class="navbar-brand-two mx-auto d-lg-none d-inline-block">
              Michael Earnest Rusk
            </p>
            <div class="w-100 text-right"></div>
          </div>
          <div
            class="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul class="navbar-nav ml-auto flex-nowrap">
              <li class="nav-item active">
                <a href="#about-top" class="nav-link m-2 menu-item nav-active">
                  Home
                </a>
              </li>
              <li class="nav-item active">
                <a href="#project-top" class="nav-link m-2 menu-item">
                  Services
                </a>
              </li>
              <li class="nav-item active">
                <a href="#contact-top" class="nav-link m-2 menu-item">
                  Projects
                </a>
              </li>
              <li class="nav-item active">
                <a href="#contact-top" class="nav-link m-2 menu-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
