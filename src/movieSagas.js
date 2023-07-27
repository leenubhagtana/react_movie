// movieSagas.js
import { put, takeLatest, call } from "redux-saga/effects";
import { addMovieSuccess, addMovieFailure, ADD_MOVIE_REQUEST } from "./movieActions";
import axios from "axios";

const API_BASE_URL = "http://localhost:3030/movies"; // Replace with your JSON Server endpoint

// Function to add movie data to the server
const addMovieToServer = async (movieData) => {
  try {
    const response = await axios.post(API_BASE_URL, movieData);
    return response.data;
  } catch (error) {
    throw new Error("Error adding movie data.");
  }
};

function* handleAddMovie(action) {
  const formData = action.payload;

  try {
    // Create movie data to be added to the server
    const movieData = {
      title: formData.title,
      genre: formData.genre,
      about: formData.about,
    };

    // Add movie data to the server
    yield call(addMovieToServer, movieData);

    yield put(addMovieSuccess());
  } catch (error) {
    yield put(addMovieFailure("Error adding movie data."));
  }
}

export function* movieSaga() {
  yield takeLatest(ADD_MOVIE_REQUEST, handleAddMovie);
}
