import React from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../type";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  // Register user
  // login user
  // logout user
  // clear error

  return (
    <AuthContext.Provider>
      value=
      {{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        token: state.loading,
        user: state.user,
        error: state.error
      }}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
