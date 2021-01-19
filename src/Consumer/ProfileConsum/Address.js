import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";

const Address = () => {
  var addr = {
    name: "",
    mob: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    mobAlt: "",
    tag: "",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState([]);
  const toggle = () => setIsOpen(!isOpen);

  const changeHandler = (event) => {
    switch (event.target.name) {
      case "name":
        addr.name = event.target.value;
        break;
      case "mob":
        addr.mob = event.target.value;
        break;
      case "pincode":
        addr.pincode = event.target.value;
        break;
      case "locality":
        addr.locality = event.target.value;
        break;
      case "city":
        addr.city = event.target.value;
        break;
      case "state":
        addr.state = event.target.value;
        break;
      case "landmark":
        addr.landmark = event.target.value;
        break;
      case "mobAlt":
        addr.mobAlt = event.target.value;
        break;
      case "tag":
        addr.tag = event.target.value;
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress(address.concat(addr));
    toggle();
  };
  const handleDelete = (t) => {
    console.log(t);
    let filterAddress = address.filter((item) => {
      return item.tag !== t;
    });
    setAddress(filterAddress);
  };
  useEffect(() => {
    console.log(address);
  });
  const ListGroup = address.map((item) => {
    return (
      <div className="list-group-item list-group-item-action ">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.name}</h5>
          <small
            onClick={() => {
              handleDelete(item.tag);
            }}
          >
            <i class="fas fa-trash fa-2x"></i>
          </small>
        </div>
        <p className="mb-1">
          {item.locality +
            ", " +
            item.city +
            ", " +
            item.state +
            " - " +
            item.pincode}
        </p>
        <small>{item.tag}</small>
      </div>
    );
  });

  return (
    <div className="ProfileConsum-Address">
      <h1>Manage Address</h1>
      <hr />
      <div className="d-grid col-6 mx-auto">
        <button
          className="btn btn-info"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          + Add a New Address
        </button>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardBody className="row">
              <div className="col-md-3 my-3">
                <button className="btn btn-primary">
                  Use My Current Location
                </button>
              </div>
              <div className="col-md-8 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="mob"
                  placeholder="10-Digit Mobile Number"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  placeholder="Pincode"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="locality"
                  placeholder="Locality"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-8 my-3">
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Address (Area and Street)"
                  onChange={changeHandler}
                ></textarea>
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="City/District/Town"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="State"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  placeholder="Landmark (Optional)"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="mobAlt"
                  placeholder="Alternate Mobile (Optional)"
                  onChange={changeHandler}
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tag"
                    value="Home"
                    onChange={changeHandler}
                  />
                  <label className="form-check-label" htmlFor="Home">
                    Home
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tag"
                    value="Work"
                    onChange={changeHandler}
                  />
                  <label className="form-check-label" htmlFor="Work">
                    Work
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tag"
                    value="other"
                    onChange={changeHandler}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
              <div className="col-md-4 my-3"></div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-2 mt-5">
                <input
                  className="btn btn-primary"
                  type="submit"
                  name="submit"
                  value="Save"
                />
              </div>
              <div
                className="col-md-2 mt-5 text-primary"
                onClick={toggle}
                style={{ cursor: "pointer" }}
              >
                Cancel
              </div>
              <div className="col-md-8 my-3"></div>
            </CardBody>
          </form>
        </Card>
      </Collapse>
      <div className="container list-group w-75 my-5">{ListGroup}</div>
    </div>
  );
};

export default Address;
