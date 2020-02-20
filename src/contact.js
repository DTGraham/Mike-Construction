import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-right">
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
