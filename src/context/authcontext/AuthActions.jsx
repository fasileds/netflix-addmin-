export const logInStart = () => ({
  type: "LOGIN_START",
});
export const logInSucsses = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const logInFialer = () => ({
  type: "LOGIN_FAILURE",
});
