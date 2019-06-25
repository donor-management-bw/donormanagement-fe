import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          {/* <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link> */}
          <div className='header-div'>
          <h1>Welcome sign In!</h1>
          </div>
          <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/protected" component={} /> */}
      </div>
    </Router>
  );
}

export default App;
