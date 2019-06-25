import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

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
};