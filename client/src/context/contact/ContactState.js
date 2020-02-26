import React, { useReducer } from "react";
import uuid from "uuid";
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
        name: "Evan Meier",
        email: "maemeier@live.com",
        phone: "079-231-3456",
        type: "professional"
      },
      {
        id: 3,
        name: "Nils Meier",
        email: "maemeier@live.com",
        phone: "079-231-3456",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact

  // delete contacts

  // set current contacts

  // clear current contacts

  //update contacts

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
