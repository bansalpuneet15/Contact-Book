import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainHome from './components/MainHome'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Alert from './components/Alert'

import PrivateRoute from './components/Route/PrivateRoute'

import ContactState from './reducers/ContactState'
import AuthState from './reducers/AuthState'
import AlertState from './reducers/AlertState'

import setAuthToken from './utils/setAuthToken'

if(localStorage.token){
  setAuthToken(localStorage.token);
}




class App extends Component {

  render() {
    return (
      <AuthState>
        <ContactState>
          <AlertState>
            <BrowserRouter>
              <div className="App">
                <Navbar />
                <div className='container' style={{ maxWidth: "1307px" }}>
                  <Alert />
                  <Switch>
                    <Route exact path='/' component={MainHome} />
                    <PrivateRoute exact path='/gettingStarted' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                  </Switch>
                </div>
                
              </div>
            </BrowserRouter>
          </AlertState>
        </ContactState>
      </AuthState>
    );
  }
}

export default App;
