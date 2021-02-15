import react from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="row nav-wrapper">
      <div className="col-lg-6">
        <a href="/homepage">
          <img src="/assets/Images/outcess.png" style={{ width: "25vh" }} />
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

                <div className="dropdown">
                  <img
                    src="/assets/images/download.svg"
                    style={{ width: "10px" }}
                    className="dropbtn"
                  />
                  <div className="dropdown-content">
                    <a href="#">Settings</a>
                    <Link to="/login">
                      <a>Logout</a>
                    </Link>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
