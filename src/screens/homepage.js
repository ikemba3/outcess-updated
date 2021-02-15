import React from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./layouts/SideNav";
import Header from "./layouts/Header";
import { NavLink } from "react-router-dom";

function HomePage() {
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
                  <a class="navbar-brand" href="#">
                    Dashboard <span class="sr-only">(current)</span>
                  </a>
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
                </nav>
                <hr className="horizontalLine" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="dashprofile">
                  <form class="needs-validation dashform" novalidate>
                    <div class="form-row">
                      <div class="col-md-4 mb-3">
                        <label for="validationTooltip03">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip03"
                          placeholder="enter first name"
                          value="Ikemba"
                          disabled
                          required
                        />
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="validationTooltip04">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip04"
                          placeholder="last name"
                          value="Oduka"
                          disabled
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-8 mb-3">
                        <label for="validationTooltip03">Employee Id</label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip03"
                          placeholder="000000"
                          value="70345"
                          disabled
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-8 mb-3">
                        <label for="validationTooltip03">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip03"
                          placeholder="enter emai name"
                          value="Emmatheduke@gmail.com"
                          disabled
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-8 mb-3">
                        <label for="validationTooltip03">Department</label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip03"
                          placeholder="enter first name"
                          value="IT Department"
                          disabled
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
