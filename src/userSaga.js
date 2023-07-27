// userSagas.js
import { put, takeLatest } from "redux-saga/effects";
import { USER_LOGIN_REQUEST, userLoginSuccess, userLoginFailure } from "./userActions";
import axios from "axios";

function* handleUserLogin(action) {
  const { username, password } = action.payload;

  try {
    // Replace the URL with your actual endpoint for reading user credentials from db.json
    const response = yield axios.get("http://localhost:3030/users");
    const userData = response.data;

    // Simulate an asynchronous login process (you can replace this with API calls to the server)
    const isValidUser = userData.some(
      (users) => users.name === username && users.password === password
    );

    if (isValidUser) {
      yield put(userLoginSuccess());
    } else {
      yield put(userLoginFailure("Invalid username or password."));
    }
  } catch (error) {
    yield put(userLoginFailure("Error during user login."));
  }
}

export function* userSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, handleUserLogin);
}
