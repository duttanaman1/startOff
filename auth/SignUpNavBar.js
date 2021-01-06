import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const SignUpNavBar = () => {
  return (
    <div className="SignUp mx-auto sticky-top">
      <Nav tabs className="mx-auto center ">
        <NavItem>
          <NavLink to="/SignUp" exact className="nav-link">
            Consumer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/SignUp/Client" className="nav-link">
            Client
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/SignUp/Admin" className="nav-link">
            Admin
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/SignUp/Financer">Another Link</NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
};

export default SignUpNavBar;
