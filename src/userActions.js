
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userLoginRequest = (username, password) => ({
  type: USER_LOGIN_REQUEST,
  payload: { username, password },
});

export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});
