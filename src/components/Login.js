import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../reducers/AlertContext'
import AuthContext from '../reducers/AuthContext'

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const { setAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const { register, error, clearError, isAuthenticated, loginUser } = authContext;

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const {email, password } = user;
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(email=== "" || password === "") {
            setAlert("Please Fill the Form", "danger");
        } else {
            loginUser({
                email,
                password,
            });
        }
    };

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
        if(error === "Invalid Credentials") {
            setAlert(error, "danger");
            clearError();
        }
    }, [error, isAuthenticated, props.history]);

        return (
            <div class="container register" style={{width: "40%", marginTop:"20vh"}}>
                <h1 className="text-center">Account <span style={{color: "#f9a323"}}>Log-In</span></h1>
                <form onSubmit={onSubmit}>
                    <div className="m-lg-3">
                        <label for="email">Email</label>
                        <input className="form-control"
                               type="email"
                               name="email"
                               value={email}
                               onChange={onChange}
                               ></input>
                    </div>
                    <div className="m-lg-3">
                        <label for="password">Password</label>
                        <input className="form-control"
                               type="password"
                               name="password"
                               value={password}
                               onChange={onChange}
                               minLength='6'
                               ></input>
                    </div>
                    <br></br>
                    <Link to='/home'>
                        <button className="btn btn-primary w-100 m-lg-1">Log-In</button>
                    </Link>
                    <Link to='/register'>
                        <button className="btn btn-light w-100 m-lg-1" style={{ color: "#f9a323" }}>Create a Account ?</button>
                    </Link>
                </form>
            </div>
        )
}

export default Login;
