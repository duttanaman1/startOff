import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Consumer/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import SignOut from "./auth/SignOut";
import cart from "./Consumer/cart";
import ProfileConsum from "./Consumer/ProfileConsum";
import ProfileClient from "./Client/ProfileClient";
import ProfileAdmin from "./Admin/ProfileAdmin";
import SettingConsum from "./Consumer/SettingConsum.js";
import SettingClient from "./Client/SettingClient";
import SettingAdmin from "./Admin/SettingAdmin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/SignOut" component={SignOut} />
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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
