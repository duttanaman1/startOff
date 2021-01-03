import React, { Component } from "react";
import FeaturedItems from "./FeaturedItems";

class HomeConsumer extends Component {
  render() {
    return (
      <div className="HomeConsumer">
        <FeaturedItems />
      </div>
    );
  }
}

export default HomeConsumer;
