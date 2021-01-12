import React, { Component } from "react";
// import { Parallax } from "react-scroll-parallax";
//import "./HomeJS";
//import "./Styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="body">
          <div class="card-list">
            <div class="card card-small">
              <div class="content">The home page will describe the</div>
              <div class="title"></div>
            </div>
            <div class="card card-large">
              <div class="content"></div>
              <div class="title"></div>
            </div>
            <div class="card card-small">
              <div class="content"></div>
              <div class="title"></div>
            </div>
            <div class="card card-large">
              <div class="content"></div>
              <div class="title"></div>
            </div>
            <div class="card card-large">
              <div class="content"></div>
              <div class="title"></div>
            </div>
            <div class="card card-small">
              <div class="content"></div>
              <div class="title"></div>
            </div>
          </div>
          <div class="shadow-background"></div>
        </div>
      </div>
    );
  }
}

export default Home;
