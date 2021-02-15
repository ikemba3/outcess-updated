import React from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./layouts/SideNav";
import Header from "./layouts/Header";
import { NavLink } from "react-router-dom";

function Application() {
  return (
    <section id="maindashcontent" className="App">
      <div className="row">
        <Sidenav />
        <div className="col-lg-10">
          <Header />
          <div className="profileForm">
            <div className="row">
              <div className="col xxx ">
                <nav class="navbar navbar-expand-lg navbar-light profileNavbar mt-1">
                  <NavLink
                    exact
                    to="/leaveapplication"
                    className="profile-main-nav"
                    activeClassName="profile-main-nav-active"
                  >
                    My leave application <span class="sr-only">(current)</span>
                  </NavLink>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarNav"></div>
                </nav>
                <hr className="horizontalLine" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="applicationError">
                  <p>Your are not qualified for leave</p>
                  <p>30 days remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
