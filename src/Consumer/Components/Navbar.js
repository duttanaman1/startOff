import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = (props) => {
  const Search = () => {
    console.log(useLocation().pathname);
    if (useLocation().pathname === "/Home/Consumer") {
      return (
        <li className="nav-item mx-5 px-5">
          <form className="d-flex justify-content-right">
            <input type="text" className="form-control " placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </li>
      );
    }
  };
  return (
    <div className="container p-3">
      <ul className="nav nav-tabs d-flex justify-content-center">
        <li className="nav-item">
          <Link to="/Home/Consumer" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Recent/Consumer" className="nav-link">
            Recent
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact/Consumer" className="nav-link">
            Contact
          </Link>
        </li>
        {Search()}
      </ul>
    </div>
  );
};

export default Navbar;
