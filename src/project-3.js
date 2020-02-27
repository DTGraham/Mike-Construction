import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project-detail.css";
import $ from "jquery";

export default class ProjectThree extends Component {
  componentDidMount() {
    // Scroll to top of page to counteract react router
    window.scrollTo(0, 0);

    // Display image when scrolled into view and remove image display when scrolled pas
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

    // Restrict modal display on mobile
    if (window.innerWidth > 450) {
      // Modal Display Function

      const modal = document.getElementById("myModal");

      // Click controls for modal display. each time a thumbnail is clicked the corresponding image is displayed

      $("img.im-1").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-1-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-2").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-2-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-3").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-3-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-4").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-4-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-5").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-5-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-6").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-6-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      $("img.im-7").on("click", function() {
        $("img.modal-image").attr(
          "src",
          "/projects/Project-2/Project-3-7-Full.JPG"
        );
        $("div.modal").css({ display: "block" });
      });

      // Close the modal display when X is clicked

      $("span.close").on("click", function() {
        $("div.modal").css({ display: "none" });
      });

      // When the user clicks anywhere outside of the modal, close it

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      // Exit modal display when user hits escape
      $(document).keyup(function(e) {
        if (e.key === "Escape") {
          modal.style.display = "none";
        }
      });
    }
  }

  render() {
    return (
      <div>
        <script src="fade.js"></script>
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
        <div class="project-banner project-3">
          <h1 class="banner-title"> Country Renovations </h1>
        </div>
        <div class="container project-content">
          <h1 class="project-title">Country Renovations</h1>

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
            <button id="im-1">
              <img
                class="project-gallery-image type1 im-1"
                src="/projects/Project-2/Project-3-1-MD.png"
              ></img>
            </button>
            <button id="im-2">
              <img
                class="project-gallery-image type2 im-2"
                src="/projects/Project-2/Project-3-2-MD.png"
                alt="not found"
              ></img>
            </button>
            <button id="im-3">
              <img
                class="project-gallery-image type1 im-3"
                src="/projects/Project-2/Project-3-3-MD.png"
                alt="not found"
              ></img>
            </button>
            <button id="im-4">
              <img
                class="project-gallery-image type2 im-4"
                src="/projects/Project-2/Project-3-4-MD.png"
                alt="not found"
              ></img>
            </button>
            <button id="im-5">
              <img
                class="project-gallery-image type1 im-5"
                src="/projects/Project-2/Project-3-5-MD.png"
                alt="not found"
              ></img>
            </button>
            <button id="im-6">
              <img
                class="project-gallery-image type2 im-6"
                src="/projects/Project-2/Project-3-6-MD.png"
                alt="not found"
              ></img>
            </button>
            <button id="im-6">
              <img
                class="project-gallery-image type1 im-7"
                src="/projects/Project-2/Project-3-7-MD.png"
                alt="not found"
              ></img>
            </button>
          </div>
        </div>
        {/* Modal Display */}
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <img
              id="modal-image"
              class="modal-image"
              src=""
              alt="not found"
            ></img>
          </div>
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
