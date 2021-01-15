import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Address = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
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
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="mob"
                  placeholder="10-Digit Mobile Number"
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  placeholder="Pincode"
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="locality"
                  placeholder="Locality"
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-8 my-3">
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Address (Area and Street)"
                ></textarea>
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="City/District/Town"
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="State"
                />
              </div>
              <div className="col-md-4 my-3"></div>

              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  placeholder="Landmark (Optional)"
                />
              </div>
              <div className="col-md-4 my-3">
                <input
                  type="text"
                  className="form-control"
                  name="mobAlt"
                  placeholder="Alternate Mobile (Optional)"
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
    </div>
  );
};

export default Address;
