import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./screens/login";
import "./index.css";
import Header from "./screens/layouts/Header";
import SideNav from "./screens/layouts/SideNav";
import Profile from "./screens/profile";
import Application from "./screens/leaveapplication";
import BioInformation from "./screens/bioinfo";
import NextOfKinInfo from "./screens/nextofkin";
import EducationInfo from "./screens/education";
import HomePage from "./screens/homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/homePage" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/leaveApplication" component={Application} />
        <Route path="/Login" component={Login} />
        <Route path="/nextOfKin" component={NextOfKinInfo} />
        <Route path="/bioInfo" component={BioInformation} />
        <Route path="/education" component={EducationInfo} />
      </Router>
    </div>
  );
}

export default App;
