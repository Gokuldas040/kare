import React, { useState } from "react";
import Styles from "./Login.module.css";
import Login from "./Login";
import Signin from "./Signin";

const Form = () => {
  const [login, setLogin] = useState(true);
  let userInfo = [
    {
      firstName: "admin",
      lastName: "admin",
      phoneNo: "",
      email: "admin@admin",
      password: "admin",
    },
  ];
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(userInfo));
  }
  return (
    <section className={Styles.mainSection}>
      <div className={Styles.mainContent}>
        <section className={Styles.leftSection}>
          <h1>We Care More.</h1>
        </section>
        <section className={Styles.rightSection}>
          {login ? (
            <>
              <Login />
              <button className="buttonLink" onClick={() => setLogin(!login)}>
                Register
              </button>
            </>
          ) : (
            <>
              <Signin />
              <button className="buttonLink" onClick={() => setLogin(!login)}>
                Login
              </button>
            </>
          )}
        </section>
      </div>
    </section>
  );
};

export default Form;
