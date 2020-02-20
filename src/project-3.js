import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project-detail.css";

export default class ProjectThree extends Component {
  render() {
    return (
      <div>
        <script src="fade.js"></script>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-right">
          <Link class="navbar-brand" to="/">
            Michael Earnest Rusk<span class="sr-only">(current)</span>
          </Link>

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

              <Link class="nav-item nav-link active" to="/projects">
                Projects <span class="sr-only">(current)</span>
              </Link>
              <Link class="nav-item nav-link active" to="/contact">
                Contact <span class="sr-only">(current)</span>
              </Link>
            </div>
          </div>
        </nav>

        <div class="project-banner">
          <h1 class="banner-title"> Project 3 </h1>
        </div>
        <div class="container project-content">
          <h1 class="project-title">Project 3</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.lorem
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.lorem
          </p>
        </div>
        <div class="gallery-container">
          <div class="project-gallery">
            <img
              class="project-gallery-image type1"
              src="project-1-p1.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="project-1-p2.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="project-1-p1.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="project-1-p2.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="project-1-p1.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="project-1-p2.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="project-1-p1.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="project-1-p2.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="project-1-p1.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="project-1-p2.jpg"
              alt="not found"
            ></img>
          </div>
        </div>
        <div class="d-flex bottom-nav navbar ">
          <p>Michael Earnest Rusk</p>
          <p>519-373-4402</p>
          <p>RR # 4 Eugenia, ON</p>
        </div>
      </div>
    );
  }
}
