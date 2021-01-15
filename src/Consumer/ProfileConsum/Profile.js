import React, { Component } from "react";

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type || "text",
      value: props.value || "",
      editClassName: props.editClassName,
      edit: false,
    };
  }
  edit() {
    var x = this.state.edit !== false;
    this.setState({ edit: x });
  }
  render() {
    return (
      (this.state.edit === true && (
        <input
          name={this.state.name}
          type={this.state.type}
          value={this.state.value}
          className={this.state.editClassName}
          autoFocus
          onFocus={(event) => {
            const value = event.target.value;
            event.target.value = "";
            event.target.value = value;
            this.setState({ backup: this.state.value });
          }}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          onBlur={(event) => {
            this.setState({ edit: false });
          }}
          onKeyUp={(event) => {
            if (event.key === "Escape") {
              this.setState({ edit: false, value: this.state.backup });
            }
            if (event.key === "Enter") {
              this.setState({ edit: false });
            }
          }}
        />
      )) || (
        <span
          onClick={(event) => {
            this.setState({ edit: this.state.edit !== true });
          }}
        >
          {this.state.value}
        </span>
      )
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "ReactJS: EditableText",
      Username: "ReactJS: EditableText",
      LastName: "ReactJS: EditableText",
      Email: "ReactJS: EditableText",
      Mobile: "ReactJS: EditableText",
      DoB: "ReactJS: EditableText",
      Password: "ReactJS: EditableText",
      City: "ReactJS: EditableText",
      Country: "ReactJS: EditableText",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log("handleClick", event.target.name);
    eval(this[event.target.name]).bind(this)(event);
  }
  render() {
    return (
      <div className="ConsumProfile container-fluid">
        <h1>Personal Information</h1>
        <hr />
        <table className="table table-hover table-responsive">
          <tbody>
            <tr>
              <th scope="row">First Name</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.FirstName}
                  editClassName="form-control"
                />
              </td>
              <th scope="row">Last Name</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.LastName}
                  editClassName="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.Email}
                  editClassName="form-control"
                />
              </td>
              <th scope="row">Password</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.Password}
                  editClassName="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Mobile</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.Mobile}
                  editClassName="form-control"
                />
              </td>
              <th scope="row">Date of Birth</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.DoB}
                  editClassName="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.City}
                  editClassName="form-control"
                />
              </td>
              <th scope="row">Country</th>
              <td colSpan="2">
                <EditableText
                  value={this.state.Country}
                  editClassName="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Profile;
