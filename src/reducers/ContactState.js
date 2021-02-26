import { React, useReducer } from "react";

import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
    GET_CONTACT,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    SET_CURRENT,
    CLEAR_FILTER,
    CONTACT_ERROR,
} from "./types";
import axios from "axios";

const ContactState = (props) => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null,
        loading: true,
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);
    // Actions

    // get all COntacts
    const getContact = async () => {
        try {
            const res = await axios.get('/contacts/');
            dispatch({ type: GET_CONTACT, payload: res.data });
        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    }

    // clear Contact
    const clearContacts = () => { dispatch({ type: CLEAR_CONTACTS }); }

    //Add Contact
    const addContact = async contact => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/contacts/', contact, config);
            dispatch({ type: ADD_CONTACT, payload: res.data });
        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }

    }
    // Delete Contact
    const deleteContact = async id => {
        try {
            await axios.delete(`/contacts/${id}`)
            dispatch({ type: DELETE_CONTACT, payload: id });
        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
        
    }

    // Set Current Contact
    const setContact = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }
    // Clear Current Contact
    const clearContact = () => {
        dispatch({ type: CLEAR_CURRENT });
    }
    //Update Contact
    const updateContact = async contact => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/contacts/${contact._id}`, contact, config);
            dispatch({ type: UPDATE_CONTACT, payload: contact });
        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    }
    //Filter Contact
    const filterContact = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }
    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            getContact,
            clearContacts,
            addContact,
            deleteContact,
            setContact,
            clearContact,
            updateContact,
            filterContact,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
