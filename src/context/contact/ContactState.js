import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import { ADD_CONTACT } from "../types";

const ContactState = (props) => {
  const initialSate = {
    name: null,
    email: null,
    subject: null,
    message: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialSate);

  //   add contact to db
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      // dispatch({
      //   type: CONTACT_ERROR,
      //   payload: err.response.msg
      // });
      console.log(err);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        ADD_CONTACT
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
