import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./Welcome.module.css";

const Admin = () => {
  let navigate = useNavigate();
  let { state } = useLocation();
  const handleLogout = () => {
    navigate("/");
  };
  console.log(state.user);
  return (
    <section className={Styles.mainSection}>
      <div className={Styles.welcomeBox}>
        <div>
          <button className="ButtonOutline" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <h1>welcome Admin</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {state.user.map((item) => (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNo}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Admin;
