import React, { useState, setState } from "react";
import "./Login.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";


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
    
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, password);

    const dbRef = ref(database);
    get(child(dbRef, `users/${firstName}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          console.log(snapshot.child("password").val());
          if (snapshot.child("password").val() === password) {
            console.log("Login Successful");
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("email", email);
            localStorage.setItem("login", true);
            window.open("/", "_self");
          } else {
            console.log("Login Failed");
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
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
        
        <button onClick={() => handleSubmit()} type="submit" class="log-btn">
          Login
        </button>
      </div>
    </div>

  );
}

export default RegistrationForm;
