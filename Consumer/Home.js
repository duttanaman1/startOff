import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import FeaturedProductCatalog from "./FeaturedProductCatalog";
import HeaderProductCatalog from "./HeaderProductCatalog";
import DiscountCoupons from "./DiscountCoupons";

class HomeConsumer extends Component {
  render() {
    return (
      <div className="HomeConsumer mb-5">
        <Navbar />
        <HeaderProductCatalog />
        <FeaturedProductCatalog />
        <DiscountCoupons />
      </div>
    );
  }
}

export default HomeConsumer;
