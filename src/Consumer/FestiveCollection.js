import React from "react";
import FestiveCollectionItem from "./Components/FestiveCollectionItem";
import "../Styles/FestiveCollectionItem.css";
const FestiveCollection = () => {
  return (
    <div className="FestiveCollection my-5 container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="my-5">Festival/Season Collection</h1>
        </div>
        <div
          className="col-md-4"
          style={{ height: 350, border: "1px solid blue" }}
        >
          <img alt="FestivalCollectionImage" />
        </div>
        <div
          className="col-md-8"
          style={{
            height: 350,
            overflowY: "scroll",
            overflowX: "hidden",
            display: "absolute",
          }}
        >
          <FestiveCollectionItem />
        </div>
      </div>
    </div>
  );
};

export default FestiveCollection;
