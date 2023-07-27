// movieActions.js
export const ADD_MOVIE_REQUEST = "ADD_MOVIE_REQUEST";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const addMovieRequest = (formData) => ({
  type: ADD_MOVIE_REQUEST,
  payload: formData,
});

export const addMovieSuccess = () => ({
  type: ADD_MOVIE_SUCCESS,
});

export const addMovieFailure = (error) => ({
  type: ADD_MOVIE_FAILURE,
  payload: error,
});
