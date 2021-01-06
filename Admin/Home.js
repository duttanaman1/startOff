import React, { Component } from "react";
import SidebarA from "./Sidebar";

class HomeAdmin extends Component {
  render() {
    return (
      <div className="HomeAdmin row">
        <SidebarA />
        <div className="col">
          <p>Home Client</p>
        </div>
      </div>
    );
  }
}

export default HomeAdmin;
