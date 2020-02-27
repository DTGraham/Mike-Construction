import React from "react";
import "./css/index.css";
import smoothscroll from "smoothscroll-polyfill";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // Implements smooth scroll feature of chrome in safari and IE
    smoothscroll.polyfill();
    return (
      <div>
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
                <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link active" href="#">
                  Services
                </a>
                <a class="nav-item nav-link active" href="#">
                  Projects
                </a>
                <a class="nav-item nav-link active" href="#">
                  Contact
                </a>
              </div>
            </div>
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
            <button type="button" class="btn btn-warning">
              {" "}
              <a href="javascript: document.body.scrollIntoView(false);">
                Request a Quote
              </a>
            </button>
          </div>
        </div>

        <div class="about container">
          <div class="about-row-flex">
            <div class="about-column-flex">
              <h1>About 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt i
              </p>
            </div>
            <div class="about-column-flex">
              <img class="about-img" src="/About-1-photo.jpg" alt="not found" />
            </div>
          </div>
          <div class="about-row-flex">
            <div class="about-column-flex bottom">
              <img
                class="about-img desktop"
                src="/About-2-photo.jpg"
                alt="not found"
              />
            </div>
            <div class="about-column-flex bottom">
              <h1>About 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt i
              </p>
            </div>
          </div>
        </div>

        <div class="about-contact container">
          <h1>Request a Quote</h1>

          <form class="" action="index.html" method="post">
            <div class="about-contact-column-flex">
              <div class="d-flex contact">
                <label for="">Name</label>
                <input type="text" name="" placeholder="Your Phone Name" />
              </div>
              <div class="d-flex contact">
                <label for="">Email</label>
                <input type="text" name="" placeholder="Your Email" />
              </div>
              <div class="d-flex contact">
                <label for="">Phone</label>
                <input type="text" name="" placeholder="Your Phone Number" />
              </div>
              <div class="d-flex contact">
                <label for="">Project</label>
                <input
                  type="textarea"
                  name=""
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

        <div class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom ">
          <p>Michael Earnest Rusk</p>
          <p>519-373-4402</p>
          <p>RR # 4 Eugenia, ON</p>
        </div>
      </div>
    );
  }
}
export default Home;
