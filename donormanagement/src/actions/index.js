import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUser = newUser => dispatch => {
  return axiosWithAuth()
      .post("https://donor-manage-bw.herokuapp.com/api/user/new", newUser)
      .then(res => {
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
    .post("https://donor-manage-bw.herokuapp.com/api/donor/add", newDonor)
    .then(res => {
      dispatch({ type: ADD_DONOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_DONOR_FAILURE, payload: err.response });
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