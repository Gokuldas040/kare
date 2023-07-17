import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Login/Form";
import Welcome from "./Pages/Welcome/Welcome";
import Admin from "./Pages/Welcome/admin"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/home" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
