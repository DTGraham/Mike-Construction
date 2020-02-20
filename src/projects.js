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
          <nav
            id="projectimagemain"
            class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-right"
          >
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
            <div class="project-image-main p1 project-image-flex">
              <h1 class="project-image-contents-1">Project 1</h1>
              <Link to="/project-one">
                <input
                  class="project-image-contents-1 btn btn-warning"
                  type="submit"
                  name=""
                  value="Learn More"
                />
              </Link>
            </div>

            <div class="project-image-main p2 project-image-flex">
              <h1 class="project-image-contents-2">Project 2</h1>
              <Link to="/project-two">
                <input
                  class="project-image-contents-2 btn btn-warning"
                  type="submit"
                  name=""
                  value="Learn More"
                />
              </Link>
            </div>
            <div class="project-image-main p3 project-image-flex">
              <h1 class="project-image-contents-3">Project 3</h1>
              <Link to="/project-three">
                <input
                  class="project-image-contents-3 btn btn-warning"
                  type="submit"
                  name=""
                  value="Learn More"
                />
              </Link>
            </div>
            <div class="project-image-main p4 project-image-flex bottom">
              <h1 class="project-image-contents-4">Project 4</h1>
              <Link to="/project-four">
                <input
                  class=" project-image-contents-4 btn btn-warning"
                  type="submit"
                  name=""
                  value="Learn More"
                />
              </Link>
            </div>
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
