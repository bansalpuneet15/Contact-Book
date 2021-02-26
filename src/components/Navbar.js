import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../reducers/AuthContext'
import ContactContext from '../reducers/ContactContext'
    
const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logOut, user } = authContext;
    const contactContext = useContext(ContactContext);
    const { clearContacts } = contactContext;

    const onLogOUT = () => {
        console.log("logout");
        logOut();
        clearContacts();
    };

    const authUser = (
        <>
            <li className="nav-item nav-link">
                Hello , {user && <span className="text-light">{user.name}</span>}
            </li>
            <li className="nav-item pl-md-5 nav-link rightbutton">
                <a onClick={onLogOUT} href="#" style={{marginLeft:'-40px'}}> 
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Log-Out</span>
                </a>
            </li>
        </>
    );
    const guestUser = (
        <>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link rightbutton">
                    Log-In
                </Link>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">
                    Contact-Keeper
        </Link>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <Link to='/' className='nav-link active' style={{margin:"0px 10px"}}>Home</Link>
                    </li>
                    {isAuthenticated ? authUser : guestUser}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
