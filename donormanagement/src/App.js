import React from "react";
import { Route } from "react-router-dom";

import SignUp from './components/SignUp'

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={} />
      <PrivateRoute path="/" component={} />
    </div>
  );
}

export default App;
