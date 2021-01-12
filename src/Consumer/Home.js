import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import FeaturedProductCatalog from "./FeaturedProductCatalog";
import HeaderProductCatalog from "./HeaderProductCatalog";
import ItemSlider from "./ItemSlider";
import DiscountCoupons from "./DiscountCoupons";
import FestiveCollection from "./FestiveCollection";

class HomeConsumer extends Component {
  render() {
    return (
      <div className="HomeConsumer mb-5 ">
        <Navbar />
        <HeaderProductCatalog />
        <FeaturedProductCatalog />
        <ItemSlider />
        <DiscountCoupons />
        <FestiveCollection />
      </div>
    );
  }
}

export default HomeConsumer;
