import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "../Styles/FeaturedProductCatalog.css";
class RecentConsumer extends Component {
  render() {
    var RecentItems = [
      {
        img: "img1.jpg",
        title: "product item 1",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img2.jpg",
        title: "product item 2",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img3.jpg",
        title: "product item 3",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img4.jpg",
        title: "product item 4",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img5.jpg",
        title: "product item 5",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img6.jpg",
        title: "product item 6",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
      {
        img: "img7.jpg",
        title: "product item 7",
        price: 2.3369,
        desp: "description",
        date: "date",
      },
    ];
    const displayRecentItem = RecentItems.map((item) => {
      return (
        <div className="product-grid__product-wrapper">
          <div className="product-grid__product">
            <div className="product-grid__img-wrapper">
              <img alt="Img" className="product-grid__img" src={item.img} />
            </div>
            <span className="product-grid__title">{item.title}</span>
            <span className="product-grid__price">{item.price}</span>
            <br />
            <span className="">Bought on {item.date}</span>
            <div className="product-grid__extend-wrapper">
              <div className="product-grid__extend">
                <p className="product-grid__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis velit itaque odit. {item.desp}
                </p>
                <span className="product-grid__btn product-grid__add-to-cart">
                  <i className="fa fa-cart-arrow-down"></i> Add to cart
                </span>
                <span className="product-grid__btn product-grid__view">
                  <i className="fa fa-eye"></i> View more
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="RecentConsumer mb-5 ">
        <Navbar />
        <div className="content">
          <h1>Recently bought</h1>
          <div className="product-grid product-grid--flexbox">
            <div className="product-grid__wrapper">{displayRecentItem}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentConsumer;
