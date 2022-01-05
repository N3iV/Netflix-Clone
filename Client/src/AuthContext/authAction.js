export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});
export const getUser = () => ({
  type: "GET_USER",
});
//Logout

export const logout = () => ({
  type: "LOGOUT",
});
