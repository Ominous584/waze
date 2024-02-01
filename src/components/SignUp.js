import React, { useState, setState } from "react";
import "./SignUp.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";


function RegistrationForm() {
  const firebaseConfig = {
    apiKey: "AIzaSyB5Es1mmILRsQh1NXgjafJkaf_1NzlvS9w",
    authDomain: "wanderwise-b0502.firebaseapp.com",
    projectId: "wanderwise-b0502",
    storageBucket: "wanderwise-b0502.appspot.com",
    messagingSenderId: "1041357023654",
    appId: "1:1041357023654:web:f4729f52ddb9beea480767",
    measurementId: "G-BX69DF2PQ5",
    databaseURL: "https://wanderwise-b0502-default-rtdb.firebaseio.com/"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("login", true);
    console.log(localStorage.getItem("firstName"));
    writeUserData();
    function writeUserData() {
      const db = getDatabase();
      set(ref(db, 'users/' + firstName), {
        username: firstName,
        email: email,
        password: password
      }).then(() => {
        window.open("/", "_self");
      }
      );
     
    }
    
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
          <a href="/login">Already a customer?</a>
        </div>
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
