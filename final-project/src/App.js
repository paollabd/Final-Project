import React, {useEffect, useState} from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Header from "./components/Header";
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import HomePage from './pages/HomePage';

  var firebaseConfig = {
    apiKey: "AIzaSyAdJ7BqhuvwsCM6VYIxJmsF_V87WKz61AM",
    authDomain: "pbd244-final-project.firebaseapp.com",
    databaseURL: "https://pbd244-final-project.firebaseio.com",
    projectId: "pbd244-final-project",
    storageBucket: "pbd244-final-project.appspot.com",
    messagingSenderId: "672333688295",
    appId: "1:672333688295:web:fa193762b76bb041892142",
    measurementId: "G-1WM6BX334N"
  };

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // initialize firebase
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error) {
        console.log('error', error);
      });
  }, [firebaseConfig])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        setLoggedIn(true);
        setUser(user);
      } else{
        setLoggedIn(false);
        setUser({});
      }
    });
  }, [])

  function signupFunction(e) {
    e.preventDefault();

    // let email = "pbd244@nyu.edu";
    // let password = "1234abcde";

    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    let name = e.currentTarget.createName.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      })
  }

  function loginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      })
  }

  function logoutFunction() {
    
    firebase.auth().signOut().then(function() {
      // sign out successful.
      setLoggedIn(false);
    })
    .catch(function(error) {
      console.log('error', error);
    })
  }

  return (
    <div className="App">
        <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
        <Router>
          <Route exact path="/">
            <HomePage user={user} /> 
          </Route>
          <Route exact path="/profile">
           { loggedIn ? <UserProfile user={user} /> : <Redirect to="/profile" /> }
          </Route>
          <Route exact path="/signup">
           { loggedIn ? <Redirect to="/" /> : <Signup signupFunction={signupFunction}/>}
          </Route>
          <Route exact path="/login">
           { loggedIn ? <Redirect to="/" /> : <Login loginFunction={loginFunction}/>}
          </Route>
        </Router>
    </div>
  );
}

export default App;

// <Route exact path='/' component={UserProfile} />
// <Route exact path='/login' component={Login} />
// <Route path='/sign-up' component={Signup} />
// <Route path='/log-out' component={Logout} />

