import React, { useContext, useEffect, useState } from 'react'
import ContactContext from '../reducers/ContactContext'
import AlertContext from '../reducers/AlertContext'

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    const alertContext = useContext(AlertContext);
    const {addContact , current ,updateContact ,clearContact , error} = contactContext;

    const [contact, setContact] = useState({
        _id : null,
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type , _id} = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            if(name === '' || phone === '' || email === ''){
                alertContext.setAlert('please Fill The Form','danger');
            }else{
                addContact(contact);
            }
        }else{
            updateContact(contact);
        }
        setContact({
            _id : null,
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
        clearAll();
    }

    const clearAll = () => {
        clearContact();
    }

    // for updating purpose as we know if we click on Edit Button Cuurent is filled wiht that contact value so we use that thing
    useEffect(() => {
        if(current !== null){
            setContact({...current});
        }else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [ContactContext , current])

    return (
        <form onSubmit={onSubmit}>
            <div className={'text-center '+ (current == null ? 'bg-primary ' : 'bg-success ') +'text-light'} style={{height:"120px"}}>
                <h1 className='contactFormheading'> {current == null ?<i class='fas fa-user-plus m-2'></i> : <i class="fas fa-user-edit m-2"></i> }{current == null ? "Add Contact" : "Edit Contact"}</h1>
            </div>
            <div className="customformContainer">
                <div>
                    <label className='form-label m-3'>Name</label>
                    <input type="text" className='form-control' name='name' value={name} onChange={onChange} />
                </div>
                <div>
                    <label className='form-label m-3'>Email</label>
                    <input type="text" className='form-control' name='email' value={email} onChange={onChange} />
                </div>
                <div>
                    <label className='form-label m-3'>Phone Number</label>
                    <input type="text" className='form-control' name='phone' value={phone} onChange={onChange} />
                </div>
                <div >
                    <label className='form-label m-3'>Contact Type</label>
                    <div className='d-flex justify-content-around'>
                        <div >
                            <label className='form-check-label m-lg-2'>Personal</label>
                            <input type="radio" checked={type === 'personal'} name='type' value='personal' onChange={onChange} />
                        </div>
                        <div>
                            <label className='form-check-label m-lg-2'>Professional</label>
                            <input type="radio" checked={type === 'professional'} name='type' value='professional' onChange={onChange} />
                        </div>
                    </div>
                </div>
                <button className={'btn '+ (current == null ? 'btn-primary ' : 'btn-success ') +'w-100 m-lg-3'}> 
                    {current == null ? "Submit" : 'Update'} 
                </button>
                
                {current && <button className='btn btn-light w-100' onClick={clearAll}> Clear </button>}
            </div>

        </form>
    );
}

export default ContactForm;