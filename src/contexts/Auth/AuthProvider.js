import { useState } from "react";
import { auth, logout } from "../../services/apiBlood/auth";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = async (cnpj, password) => {
    const data = await auth(cnpj, password);

    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }

    return false;
  };

  const signout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
