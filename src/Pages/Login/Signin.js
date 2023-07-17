import React, { useEffect, useState } from "react";
import Styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");
  const data = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const handleSave = (e) => {
    e.preventDefault();
    let found = false;
    //check for the email alraedy exists in data base
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        console.log(data[i].email);
        found = true;
        setError("User already exists !");
        break;
      }
    }
    if (!found) {
      //check whether all field are entered
      if (firstName && lastName && phoneNo && email && password && confirmPwd) {
        if (password === confirmPwd) {
          let userInfo = {
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            email: email,
            password: password,
          };
          const saveInfo = [...data, userInfo];
          localStorage.setItem("users", JSON.stringify(saveInfo));
          navigate("/welcome", { state: { user: userInfo } });
        } else {
          setError("Passwords does not match !");
        }
      } else setError("All fields are mandatory !");
    }
  };
  return (
    <form className={Styles.LoginContainer}>
      <div className={Styles.inputBox}>
        <h6>{error}</h6>
        <input
          placeholder="Enter First Name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Enter Last Name"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Enter Phone No"
          type="number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />
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
        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setConfirmPwd(e.target.value)}
        />
        <button className="ButtonFilled" type="submit" onClick={handleSave}>
          SignIn
        </button>
      </div>
    </form>
  );
};

export default Signin;
