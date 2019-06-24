import {
    ADD_USER,
    ADD_USER_FAILURE
  } from "../actions/actions";
  
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
    }
  };
  
  export default reducer;