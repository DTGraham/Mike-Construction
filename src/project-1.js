import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project-detail.css";
import $ from "jquery";

export default class ProjectOne extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    $(document).on("scroll", function() {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".about-img");
      var tags2 = $(".project-gallery-image");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }

      for (var t = 0; t < tags2.length; t++) {
        var tag2 = tags2[i];

        if ($(tag2).position().top < pageBottom) {
          $(tag2).addClass("visible");
        } else {
          $(tag2).removeClass("visible");
        }
      }
    });

    $(document).on("scroll", function() {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".project-gallery-image");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });
  }

  render() {
    return (
      <div>
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

        <div class="project-banner project-1">
          <h1 class="banner-title"> Custom Renovations</h1>
        </div>
        <div class="container project-content">
          <h1 class="project-title">Custom Renovations</h1>

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
              src="/projects/Project-1/IMG-0356.jpg"
              alt="not found"
            ></img>

            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0357.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="/projects/Project-1/IMG-0358.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0359.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="/projects/Project-1/IMG-0360.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0361.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="/projects/Project-1/IMG-0362.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0363.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type1"
              src="/projects/Project-1/IMG-0364.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0365.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0366.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0367.jpg"
              alt="not found"
            ></img>
            <img
              class="project-gallery-image type2"
              src="/projects/Project-1/IMG-0368.jpg"
              alt="not found"
            ></img>
          </div>
        </div>
        <div id="myModal" class="modal">
          <span class="close">&times;</span>

          <img class="modal-content" id="img01"></img>

          <div id="caption"></div>
        </div>
        <div class="navbar navbar-expand-sm navbar-light bg-warning sticky-bottom bottom-navbar">
          <p>Michael Earnest Rusk</p>
          <p>519-373-4402</p>
          <p>RR #4 Eugenia, ON</p>
        </div>
      </div>
    );
  }
}
