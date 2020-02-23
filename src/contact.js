import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./contact.css";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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

        <div class="contact-banner">
          <h1 class="contact-title"> Contact</h1>
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

        <div class="d-flex bottom-nav navbar ">
          <p>Michael Earnest Rusk</p>
          <p>519-373-4402</p>
          <p>RR # 4 Eugenia, ON</p>
        </div>
      </div>
    );
  }
}

export default Contact;
