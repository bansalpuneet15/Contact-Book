import { 
    GET_CONTACT,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    CONTACT_ERROR,
} from "./types";

export default (state, action) => {
    switch (action.type) {
        case GET_CONTACT : 
            return {
                ...state,
                contacts : action.payload,
                loading : false,
            }
        case CLEAR_CONTACTS : 
            return {
                ...state,
                contacts : null,
                loading : true,
                error : null
            }
        case ADD_CONTACT:
            return {
                ...state , contacts : [ action.payload , ...state.contacts  ] , loading : false,
            }
        case CONTACT_ERROR:
            return {
                ...state,
                error : action.payload
            }
        case DELETE_CONTACT:
            return {
                ...state , 
                contacts : state.contacts.filter( contact => { return contact._id !== action.payload} ) ,
                loading : false,
            }
        case SET_CURRENT :
            return {
                ...state , current : action.payload
            }
        case CLEAR_CURRENT : 
            return {
                ...state , current : null
            }
        case UPDATE_CONTACT :
            return {
                ...state , 
                contacts : state.contacts.map(contact => {return (contact._id === action.payload._id) ? action.payload : contact}),
                loading : false,
            }
        case FILTER_CONTACTS :
            return {
                ...state,
                filtered : state.contacts.filter( contact => {
                    const regex = new RegExp(`${action.payload}` , 'gi')
                    return contact.name.match(regex) || contact.email.match(regex)
                })
            }
        case CLEAR_FILTER : 
            return {
                ...state,
                filtered : null
            } 
        default:
            return state;
    }
}