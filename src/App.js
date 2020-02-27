import React from "react";
import "./index.css";
import smoothscroll from "smoothscroll-polyfill";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";

export default class App extends React.Component {
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
    // Implements smooth scroll feature of chrome in safari and IE
    smoothscroll.polyfill();
    return (
      <div>
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
        </div>

        <div class="home">
          <div class="d-flex heading-flex">
            <h1 class="heading-1">Michael Earnest Rusk</h1>
          </div>
          <div class="d-flex heading-flex">
            <h4 class="heading-2">Carpenter, Custom Home Builder</h4>
          </div>

          <div class="d-flex heading-flex">
            <button type="button" class="btn btn-warning quote-button">
              <Link to="/contact">
                Request a Quote <span class="sr-only">(current)</span>
              </Link>
            </button>
          </div>
        </div>

        <div class="about container">
          <div class="about-row-flex top">
            <div class="about-column-flex">
              <h1>About</h1>
              <p>
                Michael Earnest Rusk is homegrown local. His love and knowledge
                of carpentry began 40 years ago. In his youth he would spend
                hours on the weekends with his dad in his work shop. His dad
                Clarence, taught him an appreciation for wood, structures,
                design and quality of work. This involves seeing the form of a
                piece and how it integrates with the environment, in a
                functional and artful way. He also taught Mike the importance of
                knowledge, drafting, and mathematics. He is a lifelong learner,
                Mike is licensed to use a variety of heavy machinery and
                continues to take courses that relate to projects he is working
                on. Environmental awareness is key to his work as a carpenter.
                Reclamation of job site materials and efficacy in waste
                reduction are integral parts of the work he does.
              </p>
            </div>
            <div class="about-column-flex">
              <img
                class="about-img"
                src="/home/about-photo.jpg"
                alt="not found"
              />
            </div>
          </div>
          <div class="about-row-flex">
            <div class="about-column-flex bottom">
              <img
                class="about-img desktop"
                src="/home/About-1-photo.jpg"
                alt="not found"
              />
            </div>
            <div class="about-column-flex bottom">
              <p>
                His approach to building is unique and unparalleled. His
                attention to detail, depth of knowledge and technique allows him
                to problem solve the most complex challenges, in a novel and
                traditional way. Mike’s approach is holistic; from foundation to
                finishing. He has built custom homes and completed custom
                renovations, from jack to finish over the last 35 years both in
                Southwestern Ontario and in high growth areas in British
                Columbia. His inspiration to start his own company developed
                from his experience working with a variety of local builders.
                These experiences led to the realization that having a hands on,
                ground level, on site approach is essential to a successful
                project.
              </p>
            </div>
          </div>

          <div class="about-row-flex top">
            <div class="about-column-flex">
              <h1>Services</h1>
              <p>
                MER utilizes the most current technology in design to implement
                square level and plumb building. This involves use of high-tech
                layout and plumb bob levels. Communication is key, MER
                connection to local trades ensures that your project is
                completed according your timeline. MER’s staff is knowledgeable,
                fully insured and have decades of knowledge. We can look after
                you from start to finish. MER does decks to fences, foundation
                to finishing. This includes landscape design. MER can connect
                you with local designers, architects and engineers to manifest
                the vision of your dream home. MER work speaks for itself; high
                standard of detail from start to finish.
              </p>
            </div>
            <div class="about-column-flex">
              <img
                class="about-img"
                src="/home/about-photo.jpg"
                alt="not found"
              />
            </div>
          </div>
        </div>

        <div class="about-contact container">
          <h1>Request a Quote</h1>

          <form class="" action="https://formspree.io/mjvrvyek" method="POST">
            <div class="about-contact-column-flex">
              <div class="d-flex contact">
                <label for="">Name</label>
                <input type="text" name="Name" placeholder="Your Phone Name" />
              </div>
              <div class="d-flex contact">
                <label for="">Email</label>
                <input type="text" placeholder="Your Email" name="_replyto" />
              </div>
              <div class="d-flex contact">
                <label for="">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  placeholder="Your Phone Number"
                />
              </div>
              <div class="d-flex contact">
                <label for="">Project</label>
                <input
                  type="textarea"
                  name="message"
                  placeholder="Your Project Description"
                />
              </div>
              <div class="d-flex contact-submit">
                <input
                  class="btn btn-warning"
                  type="submit"
                  name=""
                  value="Submit"
                />
              </div>
            </div>
          </form>
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
