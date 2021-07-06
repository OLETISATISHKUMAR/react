import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SignIn from "./Componets/auth/SignIn";
import SignUp from "./Componets/auth/SignUp";
import Dashboard from "./Componets/dashboard/Dashboard";
import Navbar from "./Componets/layouts/Navigation";
import CreatProject from "./Componets/projects/CreatProject";
import ProjectDetails from "./Componets/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path= "/" component={Dashboard} />
          <Route path = "/project/:id" component ={ProjectDetails} />
          <Route path = "/signin" component = {SignIn} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/creat" component ={CreatProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
