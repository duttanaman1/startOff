import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

class Sidebar extends Component {
  handleClick = (e) => {
    console.log("toggler not working");
  };
  render() {
    return (
      <div className="col-md-3">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>
              <button onClick={this.handleClick}>Toggler</button>
            </MenuItem>
            <MenuItem>
              <NavLink to="/Home/Client">Dashboard</NavLink>
            </MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

export default Sidebar;
