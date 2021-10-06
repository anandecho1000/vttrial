import React from 'react';
import ReactDOM from 'react-dom@17.0.1/umd/react-dom.development.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

var user;

const firebaseConfig = {
  apiKey: "AIzaSyAtoeJC8Pc0b7XO4KSxGONEL3fyxhqXXxQ",
  authDomain: "vegtaza-68667.firebaseapp.com",
  projectId: "vegtaza-68667",
  storageBucket: "vegtaza-68667.appspot.com",
  messagingSenderId: "446430771457",
  appId: "1:446430771457:web:d12be61b172fb757d14300",
  measurementId: "G-9SM7K9GJVP"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth()

class Logs extends React.Component {
  googleLog() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }
  registerLog(e1) {
    var el = e1.target
    var email = el.parentElement.children['email']
    var password = el.parentElement.children['password']

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        user = userCredential.user;
        console.log('signed')
      })
      .catch((error) => { console.log(error.message) });

  }
  loginLog(e2) {
    var el = e2.target
    var email = el.parentElement.children['email']
    var password = el.parentElement.children['password']

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        user = userCredential.user;
        console.log('logged')
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  render() {
    return (
      <div>
      <input placeholder='email' name='email'/>
      <input placeholder='password' name='password'/>
       <button onClick={this.registerLog}>new account</button>
        <button onClick={this.loginLog}>login</button>
      <button onClick={this.googleLog} >google</button>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <Logs />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
