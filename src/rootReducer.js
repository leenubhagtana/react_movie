// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { authReducer } from "./authReducers";
import userReducer from "./userReducer";
import { authSaga } from "./authSagas";
import { userSaga } from "./userSaga"; // Import the new userSaga

// Root reducer combining all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer, // Add the user reducer
  // Add other reducers if you have more in your application
});

// Root saga combining all sagas
function* rootSaga() {
  yield all([ authSaga(), userSaga()]); // Include the userSaga
}

// Create the saga middleware and store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
