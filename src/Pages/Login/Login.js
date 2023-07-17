import React, { useEffect, useState } from "react";
import Styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const handleSave = (e) => {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < data.length; i++) {
      //check for the email in our data base
      if (data[i].email === email) {
        found = true;
        if (!password) {
          //check wheather password is entered
          setError("Enter password");
          break;
        } else if (data[i].password === password) {
          //check password matches
          if (data[i].email === "admin@admin") {
            //if the user is admin redirect to admin page
            navigate("/admin", { state: { user: data } });
          } else {
            //if the user is not admin redirect to welcome page
            navigate("/welcome", { state: { user: data[i] } });
          }
        } else {
          setError("Invalid Password!");
          break;
        }
      }
    }
    if (!found) {
      setError("User not found");
    }
  };
  return (
    <form className={Styles.LoginContainer}>
      <div className={Styles.inputBox}>
        <h6>{error}</h6>
        <input
          placeholder="Enter User Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="ButtonFilled" type="submit" onClick={handleSave}>
          LogIn
        </button>
      </div>
    </form>
  );
};

export default Login;
