import React from "react";
import { Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute"

import Login from './components/Login';
import SignupPage from './components/SignUpPage'
import DonationsPage from './components/DonationsPage'


import "./App.css";
import AddDonorPage from "./components/AddDonorPage";

function App() {
  let loggedIn = localStorage.getItem("token");



  return (
    <div className="App">
      <div className="navbar">
        <div >
          <Link className="logo" to="/">Donor Transparency</Link>
        </div>
        <div className="navitems">
          {loggedIn ? 
          <>  
            <Link className="singlenavitem" to="/donationform">Add Donor</Link>
            <Link>Logout</Link>
          </>
          :
          <>
            <Link className="navitem" to="/signup">Signup</Link>
            <Link className="navitem" to="/login">Login</Link>
          </>}
          

        </div>
      </div>
      <div className="container">

        <ProtectedRoute path="/donationform" component={AddDonorPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupPage} />
        <Route exact path="/" component={DonationsPage} />  
        {/* <PrivateRoute path="/" component={} />  */}
      </div>
    </div>
  );
}

export default App;
