import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import Profile from "./ProfileConsum/Profile";
import Orders from "./ProfileConsum/Orders";
import Address from "./ProfileConsum/Address";
import Feedback from "./ProfileConsum/Feedback";
import Gift from "./ProfileConsum/Gift";
import Faq from "./ProfileConsum/Faq";

import "../Styles/ProfileConsum.css";

class ProfileConsum extends Component {
  state = {
    page: "profile",
  };
  handleClick = (e) => {
    this.setState({
      page: e,
    });
  };

  Sidebar = () => {
    return (
      <ListGroup>
        <ListGroupItem
          onClick={() => {
            this.handleClick("orders");
          }}
        >
          My Orders
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("profile");
          }}
        >
          Profile Information
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("address");
          }}
        >
          Manage Address
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("feedback");
          }}
        >
          Feedbacks and Insights
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("gift");
          }}
        >
          Gift Coupons
        </ListGroupItem>
        <ListGroupItem
          onClick={() => {
            this.handleClick("faq");
          }}
        >
          FAQs
        </ListGroupItem>
      </ListGroup>
    );
  };

  page = () => {
    if (this.state.page === "profile") {
      return <Profile />;
    } else if (this.state.page === "orders") {
      return <Orders />;
    } else if (this.state.page === "address") {
      return <Address />;
    } else if (this.state.page === "feedback") {
      return <Feedback />;
    } else if (this.state.page === "gift") {
      return <Gift />;
    } else if (this.state.page === "faq") {
      return <Faq />;
    }
  };

  render() {
    return (
      <div className="ProfileConsum my-3">
        <div className="row">
          <div className="col-md-3">{this.Sidebar()}</div>
          <div className="col-md-9">{this.page()}</div>
        </div>
      </div>
    );
  }
}

export default ProfileConsum;
