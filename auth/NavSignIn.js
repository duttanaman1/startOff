import React from "react";
import { NavLink } from "react-router-dom";
const NavSignIn = () => {
  return (
    <div>
      <NavLink className="btn btn-primary mx-2" to="/SignUp">
        Register
      </NavLink>
      <NavLink className="btn btn-success mx-2" to="/SignIn">
        Sign In
      </NavLink>
    </div>
  );
};

export default NavSignIn;
