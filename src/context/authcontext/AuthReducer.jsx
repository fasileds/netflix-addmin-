const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFaching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFaching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFaching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default AuthReducer;
