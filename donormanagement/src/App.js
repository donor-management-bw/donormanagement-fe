import React from "react";
import { Route } from "react-router-dom";

import SignupPage from './components/SignUpPage'

// import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/signup" component={SignupPage} />
      {/* <PrivateRoute exact path="/" component={} />
      <PrivateRoute path="/" component={} /> */}
    </div>
  );
}

export default App;
