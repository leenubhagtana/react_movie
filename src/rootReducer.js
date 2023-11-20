// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { authReducer } from "./authReducers";
import userReducer from "./userReducer";
import { authSaga } from "./authSagas";
import { userSaga } from "./userSaga"; 

// Root reducer combining all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer, 
});

// Root saga combining all sagas
function* rootSaga() {
  yield all([ authSaga(), userSaga()]); 
}

// Create the saga middleware and store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
