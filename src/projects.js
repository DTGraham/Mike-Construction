import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import "./index.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1>test</h1>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-right">
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

          <div class="project-flex top">
            <Link to="/project-one">
              <img
                class="project-image-main"
                src="/project-1.jpg"
                alt="not found"
              ></img>
              <span class="sr-only">(current)</span>
            </Link>

            <Link to="/project-two">
              <img
                class="project-image-main"
                src="/project-2.jpg"
                alt="not found"
              ></img>
              <span class="sr-only">(current)</span>
            </Link>
          </div>
          <div class="project-flex bottom">
            <Link to="/project-three">
              <img
                class="project-image-main"
                src="/project-3.jpg"
                alt="not found"
              ></img>
              <span class="sr-only">(current)</span>
            </Link>
            <Link to="/project-four">
              <img
                class="project-image-main"
                src="/project-4.jpg"
                alt="not found"
              ></img>
              <span class="sr-only">(current)</span>
            </Link>
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

export default Projects;
