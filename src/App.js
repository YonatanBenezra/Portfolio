import React from "react";
import Nav from "./g-components/Nav";
import Sidebar from "./g-components/Sidebar";
import Home from "./screens/home/Home";
import Projects from "./screens/projects/Projects";

import FullStackCourse from "./screens/case-studies/fullstackcourse/FullStackCourse";
import Goolo from "./screens/case-studies/goolo/Goolo";
import TripleIGroup from "./screens/case-studies/tripleigroup/tripleigroup";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./App.scss";

const App = () => {
  return (
    <div className="main-container">
      <div className="container d-flex justify-content-center align-items-center">
        <Nav />
      </div>
      <div className="container-fluid p-0">
        <Sidebar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/case-studies/full-stack-course" component={FullStackCourse} />
        <Route path="/case-studies/goolo.tk" component={Goolo} />
        <Route path="/case-studies/triple-i-group" component={TripleIGroup} />
      </Switch>
    </div>
  );
};

export default App;
