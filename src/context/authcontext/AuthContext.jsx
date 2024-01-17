import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INIJTIAL_STATE = {
  user: null,
  isFaching: false,
  error: false,
};

export const AuthContext = createContext(INIJTIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispache] = useReducer(AuthReducer, INIJTIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFaching: state.isFaching,
        error: state.error,
        dispache,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
