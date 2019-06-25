import React from "react";
import { Route } from "react-router-dom";

import SignupPage from './components/SignUpPage'
import DonationsPage from './components/DonationsPage'

// import PrivateRoute from "./components/PrivateRoute";

import "./App.css";
import AddDonorPage from "./components/AddDonorPage";

function App() {
  return (
    <div className="App">
      <Route path="/donationform" component={AddDonorPage} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/" component={DonationsPage} />  
      {/* <PrivateRoute path="/" component={} />  */}
    </div>
  );
}

export default App;
