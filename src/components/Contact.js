import React, { useContext , useEffect } from 'react'
import ContactContext from '../reducers/ContactContext'
import ContactItem from './ContactItem'
import SpinnerComponent from './Spinner';


//Transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered ,getContact , loading} = contactContext;

    useEffect(() => {
        getContact();
    }, [])

    if (contacts !== null && contacts.length === 0) {
        return <h4 className='text-center text-light'>Please Add a Contact</h4>
    }
    return (

        contacts !== null && !loading ? (<TransitionGroup> {filtered !== null ?
            filtered.map((contact) => {
                return <CSSTransition key={contact._id} timeout={500} classNames="alert" >
                            <ContactItem  contact={contact} />
                        </CSSTransition>
            }) : contacts.map((contact) => {
                return <CSSTransition key={contact._id} timeout={500} classNames="alert" >
                            <ContactItem  contact={contact} />
                        </CSSTransition>
            })}
        </TransitionGroup>) : < SpinnerComponent />

    )
}

export default Contact;