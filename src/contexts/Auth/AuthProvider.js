import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  login,
  logout,
  validateToken,
} from "../../services/apiBlood/authentication";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = async () => {
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const data = await validateToken(storageData);

        if (data.user) {
          setUser(data.user);
        }
      }
    };

    token();
  }, []);

  const signin = async (cnpj, password) => {
    const data = await login(cnpj, password);

    console.log(data);

    if (data.id && data.token) {
      setUser(data.id);
      setToken(data.token);
      return true;
    }

    return false;
  };

  const signout = async () => {
    await logout();
    setUser(null);
    setToken("");
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
