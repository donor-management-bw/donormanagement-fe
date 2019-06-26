import React from "react";
import { Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute"

import Login from './components/Login';
import SignupPage from './components/SignUpPage'
import DonationsPage from './components/DonationsPage'



import "./App.css";
import AddDonorPage from "./components/AddDonorPage";

function App() {
  return (
    <div className="App">
      <ProtectedRoute path="/donationform" component={AddDonorPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/" component={DonationsPage} />  
      {/* <PrivateRoute path="/" component={} />  */}
    </div>
  );
}

export default App;
