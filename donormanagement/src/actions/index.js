import axios from 'axios'
export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUser = newUser => dispatch => {
    axios
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
  axios
    .post("https://donor-manage-bw.herokuapp.com/api/donor/add", newDonor)
    .then(res => {
      dispatch({ type: ADD_DONOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_DONOR_FAILURE, payload: err.response });
    });
};