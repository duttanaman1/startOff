import React, { Component } from "react";
import Sidebar from "./Sidebar";
class HomeClient extends Component {
  render() {
    return (
      <div className="HomeClient row">
        <Sidebar />
        <div className="col">
          <p>Home Client</p>
        </div>
      </div>
    );
  }
}

export default HomeClient;
