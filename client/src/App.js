import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/alertState";
import dash from "./components/VendorDashboard/jugar";
import Context from "./components/Vendor/Content";
import BGImage from "../src/images/BGCover.png";

import "./App.css";
import GetProfile from "./components/auth/GetProfile";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
            
              <Alerts />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
               
                {/* <PrivateRoute exact path='/' component={Home} /> */}
                <PrivateRoute exact path="/" component={dash} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path='/getprofile' component={GetProfile} /> */}
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
