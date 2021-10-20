import React, { useState } from "react";
import "./LoginPage.css";
import Logo from "./Logo";
//import {useDispatch} from 'react-redux'
import {
  authe,
  googleAuthProvider,
  githubAuthProvider,
} from "./firebase/fireb.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //AUTHENTICATION -------------------------------------

  // redux dispatch

  //const dispatch = useDispatch()

  // redux dispatch

  const authHandleGoogleSignIn = () => {
    signInWithPopup(authe, googleAuthProvider)
      .then((result) => {
        alert("signed in")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const authHandleGithubSignIn = () => {
    signInWithPopup(authe, githubAuthProvider)
      .catch((error) => {
        console.log(error.message);
      });
    
  };

  const authHandleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(authe, email, password)
      .then((auth) => {
        alert("succefully login");
      })
      .catch((e) => alert(e.message));

    setEmail("");
    setPassword("");
  };

  const authHandleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authe, email, password)
      .then((auth) => {
        alert("You are registered now, LOGIN ");
      })
      .catch((e) => alert(e.message));

    setEmail("");
    setPassword("");
  };

  //AUTHENTICATION -------------------------------------
  
  return (
    <div className="backgroundContainer">
      <div className="loginContainer">
        <div className="loginContainer__logo">
          <Logo />
          <p>
            Sharing Your Experiences With The World Makes You A Better Person
          </p>
        </div>
        <div className="loginContainer__form">
          <div className="form__login">
            <p>Login</p>
            <label>Email</label>
            <div className="email__input inputs">
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label>Password</label>
            <div className="password__input inputs">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn__andForgotOption">
              <p>Forgot Password?</p>
              <button type="submit" onClick={authHandleLogin}>
                Login
              </button>
            </div>
            <div className="registerBtn">
              <button onClick={authHandleRegister}>
                Register("I DONT HAVE ACCOUNT")
              </button>
            </div>
          </div>
          <div className="form__signup">
            <p>Other Sign in options</p>
            <div className="optionDiv" onClick={authHandleGoogleSignIn}>
              <img
                src="https://img.icons8.com/color/2x/google-logo.png"
                alt="icon"
              />
              <span className="optionDiv__text">Continue With Google</span>
            </div>
            <div className="optionDiv" onClick={authHandleGithubSignIn}>
              <img
                src="https://img.icons8.com/ios-glyphs/452/github.png"
                alt="icon"
              />
              <span className="optionDiv__text">Continue With Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
