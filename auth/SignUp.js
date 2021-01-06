import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "../Styles/signIn.css";
class SignUp extends Component {
  handleSubmit = (e) => {
    console.log("form submitted, redirect to");
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log("form submitted, redirect to");
  };

  render() {
    return (
      <div className="signUp">
        <div className="container-fluid">
          <div className="row mb-5 mt-2">
            <div className="col-lg-2 col-md-1 col-sm-2">
              <nav className="navbar ">
                <div onClick={this.props.history.goBack} className="back">
                  <i className="fas fa-arrow-circle-left fa-3x"></i>
                </div>
              </nav>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-8 px-5 pt-2 login-box">
              <div className="row">
                <div className="col login-title">
                  <i className="fa fa-user-circle fa-2x"></i> <br />
                  SIGNUP
                </div>
              </div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  {/* form starting here */}
                  <form className="row m-2 px-5" onSubmit={this.handleSubmit}>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">USERNAME</span>
                      </label>
                      <input type="text" className="username form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">EMAIL</span>
                      </label>
                      <input type="email" className="username form-control " />
                    </div>
                    <div className=" col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-lock fa-2x"></i>
                        <span className="h6"> PASSWORD</span>
                      </label>
                      <input
                        type="password"
                        className="password form-control "
                        i
                      />
                    </div>
                    <div className=" col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-lock fa-2x"></i>
                        <span className="h6"> Re-PASSWORD</span>
                      </label>
                      <input
                        type="password"
                        className="password form-control "
                        i
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">PHONE</span>
                      </label>
                      <input type="tel" className="username form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">Date of Birth</span>
                      </label>
                      <input type="text" className="username form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">CITY</span>
                      </label>
                      <input type="text" className="username form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">COUNTRY</span>
                      </label>
                      <input type="text" className="username form-control " />
                    </div>
                    <div className="row form-group">
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                          defaultChecked
                        />
                        <label
                          className="form-control-label"
                          htmlFor="inlineRadio1"
                        >
                          <span className="h6">&nbsp; Consumer</span>
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          className="form-control-label"
                          htmlFor="inlineRadio2"
                        >
                          <span className="h6">&nbsp; Client</span>
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label
                          className="form-control-label"
                          htmlFor="inlineRadio3"
                        >
                          <span className="h6">&nbsp; Admin</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked
                      />
                      <label
                        className="form-control-label"
                        htmlfor="exampleCheck1"
                      >
                        &nbsp; &nbsp;Agree to
                        <Link to="/termCondition"> terms and Condition</Link>
                      </label>
                    </div>
                    <div className="form-group">
                      <center>
                        <button
                          type="submit"
                          className="btn btn-success align-self-center form-control"
                          onClick={this.handleClick}
                        >
                          SignUp
                        </button>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
