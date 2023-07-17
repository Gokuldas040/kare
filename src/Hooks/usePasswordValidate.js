import React from "react";

const usePasswordValidate = (pass) => {
  if (!pass || pass.length === 0) {
    return "Password cannot be empty";
  }
};

export default usePasswordValidate;
