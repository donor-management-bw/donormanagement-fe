import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => localStorage.getItem("token") ? ( <Component {...props} /> ) : (<Redirect to="/signup" />)}/>
  );
};

export default PrivateRoute;