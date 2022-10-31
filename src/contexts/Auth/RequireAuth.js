import { useContext } from "react";
import Login from "../../pages/Login/Login";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  console.log(auth);

  if (!auth.user) {
    return <Login />;
  }

  return children;
};

export default RequireAuth;
