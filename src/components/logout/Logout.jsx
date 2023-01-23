import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Logout = () => {
  function logoutUser() {
    auth.signOut();
  }

  return (
    <div>
      <Link to="/">
        <button onClick={logoutUser}>Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
