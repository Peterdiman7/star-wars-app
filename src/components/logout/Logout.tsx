import React from "react";

import { useNavigate } from "react-router-dom";
import { routing } from "../../routing";
import { auth } from "../../utils/firebase";

const Logout = () => {
  const navigate = useNavigate();

  function logoutUser() {
    auth.signOut();
    navigate(routing.public);
  }

  return <button onClick={logoutUser}>Logout</button>;
};

export default Logout;
