const useEmailvalidate = (email) => {
  const isEmailValid = /@/.test(email); // check for @ symbolin email entered
  if (!isEmailValid) {
    return false;
  }

  return true;
};

export default useEmailvalidate;
