import React from "react";
import { withRouter, Link } from "react-router-dom";

import "../Styles/signIn.css";
const SignIn = (props) => {
  return (
    <div className="container-fluid signIn">
      <div className="row my-5 ">
        <div className="col-lg-7 col-md-2 col-sm-2 text-light">
          <nav className="navbar ">
            <div onClick={props.history.goBack} className="back">
              <i className="fas fa-arrow-circle-left fa-3x"></i>
            </div>
          </nav>
          edit background image from styles/signin.css in .signIn class, opacity
          of login box is 0.5, edit the background to div.row
        </div>
        <div className="col-lg-4 col-md-8 col-sm-8 px-5  login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">LOGIN</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">
                    {" "}
                    <i className="fa fa-user fa-2x"></i>{" "}
                    <span className="h6">USERNAME</span>
                  </label>

                  <input type="text" className="username form-control " />
                </div>
                <div className="form-group">
                  <label className="form-control-label">
                    <i className="fa fa-lock fa-2x"></i>
                    <span className="h6"> PASSWORD</span>
                  </label>
                  <input type="password" className="password form-control " i />
                </div>

                <div className="form-group my-5">
                  <center>
                    <button
                      type="submit"
                      className="btn form-control btn-primary align-self-center"
                    >
                      LOGIN
                    </button>
                  </center>
                </div>
                <div className="form-group mb-5">
                  <center>
                    <Link to="/forgotpass" className="nav-link">
                      Forgot password?
                    </Link>
                  </center>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-2"></div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
