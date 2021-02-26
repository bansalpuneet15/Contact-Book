import React, { useContext, useEffect } from 'react'
import ContactForm from './ContactForm'
import Contact from './Contact'
import ContactFilter from './ContactFilter'

import AuthContext from '../reducers/AuthContext'

const Home = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="customHome" style={{marginTop:"20px"}}>
                <div className="col customform " style={{marginRight:"50px"}}>
                    <ContactForm />
                </div>
                <div className='col ' style={{marginLeft:"50px"}}>
                    <ContactFilter />
                    <div className='contactContainer'>
                        <Contact />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
