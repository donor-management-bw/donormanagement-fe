import {
    ADD_USER,
    ADD_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_DONOR,
    ADD_DONOR_FAILURE
  } from "../actions/index";
  
  const initialState = {
    users: [],
    signingUp: false,
    error: null,
    loading: true,
    token: localStorage.getItem("token"),
    donors: []
  };
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
              ...state,
              users: action.payload
            };
        case ADD_USER_FAILURE:
            return {
              ...state,
              error: action.payload
            };
            case LOGIN_START:
              return {
                ...state,
                error: '',
                loggingIn: true
              };
            case LOGIN_SUCCESS:
              return {
                ...state,
                loggingIn: false,
                error: ''
              };
            case LOGIN_FAILURE:
              return {
                ...state,
                loggingIn: false,
                error: action.payload
              };
            case ADD_DONOR:
              return {
                ...state,                
                error: '',
                donors: [...state.donors, action.payload]
              };
            case ADD_DONOR_FAILURE:
              return {
                ...state,                
                error: action.payload
              };
              default:
            return state;
    }
  };
  
  export default reducer;
