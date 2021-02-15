import React from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./layouts/SideNav";
import Header from "./layouts/Header";
import { NavLink } from "react-router-dom";

function NextOfKinInfo() {
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
                    to="/profile"
                    className="profile-main-nav"
                    activeClassName="profile-main-nav-active"
                  >
                    Personal Details <span class="sr-only">(current)</span>
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
                  <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                      <NavLink
                        exact
                        to="/bioinfo"
                        className="profile-main-nav"
                        activeClassName="profile-main-nav-active"
                      >
                        Bio
                      </NavLink>
                      <NavLink
                        exact
                        to="/nextofkin"
                        className="profile-main-nav"
                        activeClassName="profile-main-nav-active"
                      >
                        Next of Kin
                      </NavLink>
                      <NavLink
                        exact
                        to="/education"
                        className="profile-main-nav"
                        activeClassName="profile-main-nav-active"
                      >
                        Education
                      </NavLink>
                    </ul>
                  </div>
                </nav>
                <hr className="horizontalLine" />
              </div>
            </div>
            <div className="row details">
              <div className="col">
                <form class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="enter first name"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="last name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="enter email"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">Phone Number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="enter phone number"
                        required
                      />
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">Relationship</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="father/mother..."
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <button class="btn " type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NextOfKinInfo;
