import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";
import axios from "axios";

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
  const loadUser = () => {
    console.log("Load User");
  };
  // Register user
  const register = async formData => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.post("api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  // login user
  const login = () => {
    console.log("Login");
  };
  // logout user
  const logout = () => {
    console.log("Logout");
  };
  // clear error
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        login,
        logout,
        clearErrors,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
