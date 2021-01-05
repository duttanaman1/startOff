import React from "react";
import HeaderCarousel from "./Components/HeaderCarousel";
import HeaderSideNav from "./Components/HeaderSideNav";
// import { Collapse, Button } from "reactstrap";

const HeaderProductCatalog = (props) => {
  return (
    <div className="HeaderProductCatalog mb-5">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <HeaderSideNav />
        </div>
        <div className="col-md-9">
          <HeaderCarousel />
        </div>
      </div>
    </div>
  );
};
export default HeaderProductCatalog;
