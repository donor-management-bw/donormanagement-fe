import {
    ADD_USER,
    ADD_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_DONOR,
    ADD_DONOR_FAILURE,
    FETCH_DONORS_START,
    FETCH_DONORS_SUCCESS,
    FETCH_DONORS_FAILURE,
    ADD_DONATION,
    ADD_DONATION_FAILURE,
  } from "../actions/index";
  
  const initialState = {
    users: [],
    donors:[],
    signingUp: false,
    error: null,
    loading: true,
    token: localStorage.getItem("token")
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
            case FETCH_DONORS_START:
              return {
                ...state,
                loading: true,
                error: null
              };
            case FETCH_DONORS_SUCCESS:
              return {
                ...state,
                donors: [...state.donors, ...action.payload],
                loading: false,
                error: null
              };
            case FETCH_DONORS_FAILURE:
              return {
                ...state,
                loading: false,
                error: action.payload
              };
            case ADD_DONATION:
              return {
                ...state,
                donations: action.payload
              };
            case ADD_DONATION_FAILURE:
              return {
                ...state,
                error: action.payload
              };
            default:
            return state;
    }
  };
  
  export default reducer;
