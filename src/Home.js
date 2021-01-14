import React, { Component } from "react";
// import { findDOMNode } from "react-dom";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./Styles/Home.css";
class Home extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="Home mb-5" style={{ backgroundColor: "black" }}>
          <div className="body">
            <div className="home-cart-list">
              <Parallax y={[-10, 10]} x={[-20, 0]}>
                <div className="home-cart home-cart-large">
                  <div className="home-content"></div>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]} x={[20, 0]}>
                <div className="home-cart home-cart-small">
                  <div className="home-content">
                    The home page will describe the
                  </div>
                </div>
              </Parallax>
              <Parallax y={[20, -20]} x={[-20, 20]}>
                <div className="home-cart home-cart-small">
                  <div className="home-content"></div>
                </div>
              </Parallax>
              <Parallax y={[-10, 20]} x={[10, -30]}>
                <div className="home-cart home-cart-large">
                  <div className="home-content"></div>
                </div>
              </Parallax>
              <Parallax y={[-10, 30]} x={[-10, 0]}>
                <div className="home-cart home-cart-large">
                  <div className="home-content"></div>
                </div>
              </Parallax>
              <Parallax y={[-10, 50]} x={[-20, 0]}>
                <div className="home-cart home-cart-small">
                  <div className="home-content"></div>
                </div>
              </Parallax>
            </div>
            <div className="shadow-background"></div>
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default Home;
