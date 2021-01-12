import React, { Component, createRef } from "react";
import "../Styles/ItemSlider.css";
class ItemSlider extends Component {
  constructor(props) {
    super(props);
    this.slider = createRef();
  }
  handleback = () => {
    var slider = this.slider.current;
    const c = 33.33;
    let left = slider.style.transform.split("%")[0].split("(")[1];
    var num;
    if (left) {
      num = Number(left) + Number(c);
    } else {
      num = Number(c);
    }
    slider.style.transform = `translateX(${num}%)`;

    if (left === -166.65) {
      slider.addEventListener("transitionend", myfunc);
      function myfunc() {
        this.style.transition = "none";
        this.style.transform = `translateX(-299.97%)`;
        slider.removeEventListener("transitionend", myfunc);
      }
    } else {
      slider.style.transition = "all 0.5s";
    }
  };
  handleforward = () => {
    var slider = this.slider.current;
    const c = -33.33;
    let left = slider.style.transform.split("%")[0].split("(")[1];
    var num;
    if (left) {
      num = Number(left) + Number(c);
    } else {
      num = Number(c);
    }

    slider.style.transform = `translateX(${num}%)`;

    if (left === -299.97) {
      console.log("reached the border");
      slider.addEventListener("transitionend", myfunc);
      function myfunc() {
        this.style.transition = "none";
        this.style.transform = `translateX(-166.65%)`;
        slider.removeEventListener("transitionend", myfunc);
      }
    } else {
      slider.style.transition = "all 0.5s";
    }
  };
  handleLoad = () => {
    var slider = this.slider.current;
    const sliderChildren = slider[0].children;
    console.log(sliderChildren);
    slider.style.transform = `translateX(${sliderChildren.length * -33.33}%)`;
    Array.from(sliderChildren)
      .slice()
      .reverse()
      .forEach((child) => {
        let cln = child.cloneNode(true);
        cln.classList += " cloned before";
        slider.insertBefore(cln, sliderChildren[0]);
      });
    Array.from(sliderChildren).forEach((child) => {
      let cln = child.cloneNode(true);
      if (child.classList.contains("cloned") === false) {
        cln.classList += " cloned after";
        slider.appendChild(cln);
      }
    });
  };

  render() {
    const sliderct = {
      overflow: "hidden",
      padding: 0,
      position: "relative",
    };
    const slidewr = {
      position: "relative",
      flexWrap: "nowrap",
    };
    return (
      <div className="container" style={sliderct} id="slide-ct">
        <div className="row" style={slidewr} id="slide-wr" ref={this.slider}>
          <div className="col-sm-4 slideItem">
            https://codepen.io/Arefweb/pen/RwGywWd?editors=0010
          </div>
          <div className="col-sm-4 slideItem">col-2</div>
          <div className="col-sm-4 slideItem">col-3</div>
          <div className="col-sm-4 slideItem">col-4</div>
          <div className="col-sm-4 slideItem">col-5</div>
        </div>
        <button id="back" onClick={this.handleback}>
          &lt;{" "}
        </button>
        <button id="forward" onClick={this.handleforward}>
          {" "}
          &gt;
        </button>
      </div>
    );
  }
}

export default ItemSlider;
