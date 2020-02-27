import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./projects.css";
import $ from "jquery";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    $(document).ready(function() {
      $("div.p1").on("mouseover", function() {
        $("div.p1").css(
          "background-image",
          "url(/projects/Project-1/Project-1-Dark.png)"
        );
        window.$("h1.project-image-contents-1").css("opacity", "1");
        window.$("input.project-image-contents-1").css("opacity", "1");
      });
      $("div.p1").on("mouseout", function() {
        $("div.p1").css(
          "background-image",
          "url(/projects/Project-1/IMG-0361.jpg)"
        );
        $("h1.project-image-contents-1").css("opacity", "0");
        $("input.project-image-contents-1").css("opacity", "0");
      });
      $("div.p2").on("mouseover", function() {
        $("div.p2").css(
          "background-image",
          "url(/projects/Project-2/Project-2-Dark.png)"
        );
        $("h1.project-image-contents-2").css("opacity", "1");
        $("input.project-image-contents-2").css("opacity", "1");
      });
      $("div.p2").on("mouseout", function() {
        $("div.p2").css(
          "background-image",
          "url(/projects/Project-2/IMG-0257.jpg)"
        );
        $("h1.project-image-contents-2").css("opacity", "0");
        $("input.project-image-contents-2").css("opacity", "0");
      });
      $("div.p3").on("mouseover", function() {
        $("div.p3").css(
          "background-image",
          "url(/projects/Project-2/Project-3-Dark.png)"
        );
        $("h1.project-image-contents-3").css("opacity", "1");
        $("input.project-image-contents-3").css("opacity", "1");
      });
      $("div.p3").on("mouseout", function() {
        $("div.p3").css(
          "background-image",
          "url(/projects/Project-3/IMG-0464.jpg"
        );
        $("h1.project-image-contents-3").css("opacity", "0");
        $("input.project-image-contents-3").css("opacity", "0");
      });
      $("div.p4").on("mouseover", function() {
        $("div.p4").css("background-image", "url(/project-4-dark.png)");
        $("h1.project-image-contents-4").css("opacity", "1");
        $("input.project-image-contents-4").css("opacity", "1");
      });
      $("div.p4").on("mouseout", function() {
        $("div.p4").css("background-image", "url(/project-4.jpg)");
        $("h1.project-image-contents-4").css("opacity", "0");
        $("input.project-image-contents-4").css("opacity", "0");
      });
    });
  }
  render() {
    return (
      <div>
        <div class="projects-container">
          <script src="scripts/project-highlight.js"></script>
          <div class="container">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
              <a class="navbar-brand" href="#">
                Michael Earnest Rusk
              </a>

              <ul class="navbar-nav mr-auto"></ul>
              <ul class="navbar-nav ml-auto">
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
                    <li class="nav-item active">
                      <Link class="nav-link" to="/">
                        Home<span class="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li class="nav-item active">
                      <Link class="nav-link" to="/projects">
                        Projects <span class="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li class="nav-item active">
                      <Link class="nav-link" to="/contact">
                        Contact <span class="sr-only">(current)</span>
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </nav>

            <div class="project-flex top">
              <div class="project-image-main p1 project-image-flex">
                <h1 class="project-image-contents-1">Custom Renovations</h1>
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
                <h1 class="project-image-contents-2">Timber Home</h1>
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
                <h1 class="project-image-contents-3">Country Renovations</h1>
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
