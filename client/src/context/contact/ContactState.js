import React, { useReducer } from "react";
import uuid from "uuid/v4";
import ContactContext from "./contactContext";

import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Mae Meier",
        email: "maemeier@live.com",
        phone: "079-231-3456",
        type: "personal"
      },
      {
        id: 2,
        name: "Peter Pan",
        email: "disney@land.com",
        phone: "079-231-3403",
        type: "professional"
      },
      {
        id: 3,
        name: "React Native",
        email: "react@facebook.com",
        phone: "089-231-3456",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contacts

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // set current contacts

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // clear current contacts

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update contacts
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // filter contacts

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
