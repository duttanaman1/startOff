import React from "react";
import { Jumbotron } from "reactstrap";

const DiscountCoupons = () => {
  var discounts = [
    {
      img: "alt1.jpg",
      description: "something1 something",
      title: "discount1",
      discountPer: "25",
    },
    {
      img: "alt2.jpg",
      description: "something22 something",
      title: "discount2",
      discountPer: "35",
    },
  ];

  const display = discounts.map((discount) => {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      border: "1px solid black",
      width: "100px",
    };
    const discountbox = {
      border: "0.15 solid grey",
      boxShadow: "2px 2px 7px 1px #1C6EA4",
    };

    return (
      <div
        className="col-md-6 col-sm-12"
        style={discountbox}
        key={discount.title}
      >
        <Jumbotron>
          <img src={discount.img} alt={discount.title} style={mystyle} />
          <h1 className="display-5">{discount.title}</h1>
          <p className="lead">{discount.discountPer} % Off</p>
          <hr className="my-2" />
          <p>
            {discount.description}{" "}
            <strong>Set image as background image for discount coupons</strong>
          </p>
          <div className="lead">
            <form
              onSubmit={() => {
                console.log("discount clicked");
              }}
            >
              <input type="text" value={discount.title} hidden readOnly />
              <input
                type="submit"
                className=" btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                }}
                value={discount.discountPer + "%"}
              />
            </form>
          </div>
        </Jumbotron>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{display}</div>
    </div>
  );
};

export default DiscountCoupons;
