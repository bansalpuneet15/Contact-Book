import React, {useContext, useEffect, useRef} from 'react'
import ContactContext from '../reducers/ContactContext'

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);
    const { filterContact , clearFilter , filtered} = contactContext;

    useEffect(() => {
        if(filtered === null){
            text.current.value = ''
        }
    })

    const onChange = (e) => {
        if (text.current.value !== '') {
            filterContact(e.target.value);
        }else{
            clearFilter(); 
        }
    }

    const text = useRef("");
    return ( 
        <form >
            <input className='form-control m-lg-4' ref={text} type="text" onChange={onChange} placeholder='Filter Contact...' style={{width:"80%"}}/>
        </form>
    );
}

export default ContactFilter;