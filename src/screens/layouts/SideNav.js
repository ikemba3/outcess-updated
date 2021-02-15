import react from "react";
import { Button, form } from "react-bootstrap";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineInbox
} from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
function SideNav() {
  return (
    <div className="col-lg-2 sidenav ">
      <div className="employeeId">
        <div className=" user-business-details">
          <p>Employee</p>
          <p style={{ fontWeight: 100 }} className="emailId">
            paschal@gmail.com
          </p>
        </div>
      </div>
      <div className="navbar-collapse mt-4" id="navbarTogglerDemo03 ">
        <ul className="nav flex-column">
          <NavLink
            exact
            to="/homepage"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <AiOutlineHome />
            &nbsp;&nbsp; Home
          </NavLink>
          <NavLink
            exact
            to="/profile"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <AiOutlineSetting />
            &nbsp;&nbsp; Settings
          </NavLink>
          <NavLink
            exact
            to="/leaveapplication"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <AiOutlineInbox />
            &nbsp;&nbsp; Apply for Leave
          </NavLink>
          <NavLink
            exact
            to="/support"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <BiHelpCircle />
            &nbsp;&nbsp; Support
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
