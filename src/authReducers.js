// authReducers.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActions";

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload,
        
      };
    default:
      return state;
  }
};
