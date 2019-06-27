import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUser = newUser => dispatch => {
  axios
      .post("https://donor-manage-bw.herokuapp.com/api/user/new", newUser)
      .then(res => {
        console.log(res)
        dispatch({ type: ADD_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAILURE, payload: err.response });
      });
  };


export const ADD_DONOR = "ADD_DONOR";
export const ADD_DONOR_FAILURE = "ADD_DONOR_FAILURE";
  
export const addDonor = newDonor => dispatch => {
  return axiosWithAuth()
    .post("/api/donors/add", newDonor)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_DONOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_DONOR_FAILURE, payload: err.response });
    });
};


export const DELETE_DONOR = "DELETE_DONOR";
export const DELETE_DONOR_FAILURE = "DELETE_DONOR_FAILURE";
  
export const deleteDonor = donorId => dispatch => {
  return axiosWithAuth()
    .delete("/api/donor/delete/{donorid}", donorId)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_DONOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_DONOR_FAILURE, payload: err.response });
    });
};

export const ADD_DONATION = "ADD_DONATION";
export const ADD_DONATION_FAILURE = "ADD_DONATION_FAILURE";
  
export const addDonation = newDonation => dispatch => {
  return axiosWithAuth()
    .post("/api/donation/add", newDonation)
    .then(res => {
      console.log(res)      
      dispatch({ type: ADD_DONATION, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_DONATION_FAILURE, payload: err.response });
    });
};


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios    
    .post('https://donor-manage-bw.herokuapp.com/oauth/token', creds, {
      headers: { Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(res => {          
      localStorage.setItem('token', res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log('ERROR', err));
  }


export const FETCH_DONORS_START = "FETCH_DONORS_START";
export const FETCH_DONORS_SUCCESS = "FETCH_DONORS_SUCCESS";
export const FETCH_DONORS_FAILURE = "FETCH_DONORS_FAILURE";

export const fetchDonors = () => dispatch => {
    dispatch({ type: FETCH_DONORS_START });
    return axiosWithAuth()
      .get("/api/donors/all")
      .then(res => {
        dispatch({ type: FETCH_DONORS_SUCCESS, payload: res.data });
        console.log(res, 'RESULTS')
      })
      .catch(err => {
        dispatch({ type: FETCH_DONORS_FAILURE, payload: err });
      });
  };
  export const DELETE_DONOR_START = 'DELETE_DONOR_START';
  export const DELETE_DONOR_SUCCESS = 'DELETE_DONOR_SUCCESS';
  export const DELETE_DONOR_FAILURE = 'DELETE_DONOR_FAILURE';
  export const deleteDonor = id => dispatch => {
    dispatch({ type: DELETE_DONOR_START });
    return axiosWithAuth()
      .delete(`/api/donor/delete/${id}`)
      .then(res => { 
        console.log(res)             
        dispatch({ type: DELETE_DONOR_SUCCESS, payload: id });
      })
      .catch(err => {      
        dispatch({ type: DELETE_DONOR_FAILURE, payload: err });
      });
  };