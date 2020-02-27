import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import uuid from "uuid/v4";

import { SET_ALERT, REMOVE_ALERT } from "../type";

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // SET_ALERT
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      timeout
    );
  };
  // SET_ALERT

  return (
    <AlertState.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertState.Provider>
  );
};

export default AlertState;
