import React from "react";

const FestiveCollectionItem = () => {
  var items = [
    {
      img: "image1.jpg",
      title: "productTitle1",
      price: "200",
      desc: "dexcription",
    },
    {
      img: "image2.jpg",
      title: "productTitle2",
      price: "200",
      desc: "dexcription",
    },
    {
      img: "image3.jpg",
      title: "productTitle3",
      price: "200",
      desc: "dexcription",
    },
    {
      img: "image6.jpg",
      title: "productTitle3",
      price: "200",
      desc: "dexcription",
    },
    {
      img: "image5.jpg",
      title: "productTitle3",
      price: "200",
      desc: "dexcription",
    },
    {
      img: "image4.jpg",
      title: "productTitle3",
      price: "200",
      desc: "dexcription",
    },
  ];
  const displayitem = items.map((item) => {
    return (
      <div className="card col-lg-4 col-md-6" key={item.img}>
        <img className="product-image" alt="productImage" src={item.img} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.desc}Come description. need to change typography, font style.
            the img has index -1
          </p>
          <button href="#" className="btn btn-primary">
            {item.price}
          </button>
        </div>
      </div>
    );
  });
  return <div className="FestiveCollection row">{displayitem}</div>;
};

export default FestiveCollectionItem;
