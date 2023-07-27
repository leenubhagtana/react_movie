// movieReducer.js
import {
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
} from "./movieActions";

const initialState = {
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
