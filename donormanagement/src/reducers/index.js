import {
    ADD_USER,
    ADD_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from "../actions/index";
  
  const initialState = {
    users: [],
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
              default:
            return state;
    }
  };
  
  export default reducer;
