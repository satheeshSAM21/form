import React, { Component } from "react";
import { Redirect, Route,BrowserRouter } from "react-router-dom";
import Dashboard from '../components/Dashboard';

class PublicRouter extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Route path="/dashboard" exact render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route render={() => <Redirect to="/dashboard" />} />
      </BrowserRouter>
    
    );
  };
}

export default PublicRouter;
