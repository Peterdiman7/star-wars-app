import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Logout = () => {
  const navigate = useNavigate();

  function logoutUser() {
    auth.signOut();
    navigate("/");
  }

  return (

    <button onClick={logoutUser}>Logout</button>

  );
};

export default Logout;
