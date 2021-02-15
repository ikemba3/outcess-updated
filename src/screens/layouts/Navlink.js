import react from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section id="navsectiondash" className="container-fluid">
      <div className="container">
        <div className="row nav-wrapper">
          <div className="col-lg-6">
            <a href="/homepage">
              <img src="/assets/Images/outcess.png" style={{ width: "30vh" }} />
            </a>
          </div>
          <div className="col-lg-3">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <div className="cover">
                  <a className="nav-link" href="#">
                    <img
                      src="/assets/images/user.svg"
                      style={{ width: "23px" }}
                      className="menu-icon"
                    />
                  </a>
                  <div className="dropdown">
                    <img
                      src="/assets/images/download.svg"
                      style={{ width: "10px" }}
                      className="dropbtn"
                    />
                    <div className="dropdown-content">
                      <a href="#">Log out</a>
                      <a href="#">my Application</a>
                      <a href="#">Settings</a>
                      <a href="#">Logout</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
