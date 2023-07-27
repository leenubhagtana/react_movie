// authSagas.js
import { put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure, LOGIN_REQUEST } from "./authActions";
import axios from "axios";

function* handleLogin(action) {
  const { username, password } = action.payload;

  try {
    // Replace the URL with your actual endpoint for reading admin credentials from db.json
    const response = yield axios.get(`http://localhost:3030/admin`);
    const adminData = response.data;
    console.log("auth saga triggered");

    // Simulate an asynchronous login process (you can replace this with API calls to the server)
    const isAdmin = adminData.some(
      (admin) => admin.username === username && admin.password === password
    );

    if (isAdmin) {
      yield put(loginSuccess());
    } else {
      yield put(loginFailure("Invalid username or password."));
    }
  } catch (error) {
    yield put(loginFailure("Error during login."));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
