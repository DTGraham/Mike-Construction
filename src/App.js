import React from "react";
import "./index.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div id="react-nav"></div>

        <div class="home">
          <div class="d-flex heading-flex">
            <h1 class="heading-1">Michael Earnest Rusk</h1>
          </div>
          <div class="d-flex heading-flex">
            <h4 class="heading-2">Carpenter, Custom Home Builder</h4>
          </div>

          <div class="d-flex heading-flex">
            <button type="button" class="btn btn-warning">
              Request a Quote
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
            <div class="about-column-flex">
              <img class="about-img" src="/About-2-photo.jpg" alt="not found" />
            </div>
            <div class="about-column-flex">
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
          <h1>Request a Quote!</h1>

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
                <label for="">Phone Number</label>
                <input type="text" name="" placeholder="Your Phone Number" />
              </div>
              <div class="d-flex contact">
                <label for="">Describe your project</label>
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

        <div class="d-flex bottom-nav">
          <p>Michael Earnest Rusk</p>
          <p>519-373-4402</p>
          <p>RR # 4 Eugenia, ON</p>
        </div>
      </div>
    );
  }
}
export default App;
