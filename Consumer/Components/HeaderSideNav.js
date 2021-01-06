import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const HeaderSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md" className="text-center px-3">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex flex-column" navbar>
            <NavItem className="my-3">
              <NavbarBrand>Products</NavbarBrand>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 5</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 6</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home/Consumer">Item 4</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderSideNav;
