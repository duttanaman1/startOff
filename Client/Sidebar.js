import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/sidebar.css";

class Sidebar extends Component {
  state = {
    showsidebar: false,
  };
  sidenavClose = (e) => {
    this.setState({
      showsidebar: false,
    });
  };
  sidenavOpen = (e) => {
    this.setState({
      showsidebar: true,
    });
  };
  render() {
    if (this.state.showsidebar) {
      return (
        <div className="sidenavopen">
          <a onClick={this.sidenavClose}>
            <i class="fas fa-times"></i>
          </a>
          <NavLink to="/Home/Client">About</NavLink>
          <NavLink to="/Home/Client">Services</NavLink>
          <NavLink to="/Home/Client">Clients</NavLink>
          <NavLink to="/Home/Client">Contact</NavLink>
        </div>
      );
    } else {
      return (
        <div className="sidenavclose">
          <div onClick={this.sidenavOpen}>
            <i class="fas fa-bars"></i>
          </div>
          <NavLink to="/Home/Client">A</NavLink>
          <NavLink to="/Home/Client">S</NavLink>
          <NavLink to="/Home/Client">C</NavLink>
          <NavLink to="/Home/Client">C</NavLink>
        </div>
      );
    }
  }
}

export default Sidebar;
