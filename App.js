import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import HomeConsumer from "./Consumer/Home";
import HomeClient from "./Client/Home";
import HomeAdmin from "./Admin/Home";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import SignUpAdmin from "./auth/SignUpAdmin";
import SignUpClient from "./auth/SignUpClient";
import SignOut from "./auth/SignOut";
import forgotpass from "./auth/forgotpass";
import termCondition from "./auth/termCondition";

import cart from "./Consumer/cart";
import ProfileConsum from "./Consumer/ProfileConsum";
import ProfileClient from "./Client/ProfileClient";
import ProfileAdmin from "./Admin/ProfileAdmin";
import SettingConsum from "./Consumer/SettingConsum.js";
import SettingClient from "./Client/SettingClient";
import SettingAdmin from "./Admin/SettingAdmin";
import Navfooter from "./footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home/Consumer" exact component={HomeConsumer} />
              <Route path="/Home/Client" exact component={HomeClient} />
              <Route path="/Home/Admin" exact component={HomeAdmin} />
              {/* logins, signs, signup */}
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} exact />
              <Route path="/SignUp/Admin" component={SignUpAdmin} exact />
              <Route path="/SignUp/Client" component={SignUpClient} exact />
              <Route path="/SignOut" component={SignOut} />
              <Route path="/forgotpass" component={forgotpass} />
              <Route path="/termCondition" component={termCondition} />

              <Route path="/cart" component={cart} />
              {/* Profiles */}
              <Route path="/Profile/Consumer" component={ProfileConsum} />
              <Route path="/Profile/Client" component={ProfileClient} />
              <Route path="/Profile/Admin" component={ProfileAdmin} />
              {/* Settings */}
              <Route path="/Setting/Consumer" component={SettingConsum} />
              <Route path="/Setting/Client" component={SettingClient} />
              <Route path="/Setting/Admin" component={SettingAdmin} />
              {/* 
            <Route path="/about" component={} />
            <Route path="/contact" component={} /> */}
            </Switch>
            <Navfooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
