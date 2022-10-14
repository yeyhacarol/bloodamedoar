import { useEffect, useState } from "react";
import { auth, logout, validateToken } from "../../services/apiBlood/auth";
import { AuthContext } from "./AuthContext";

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
    const data = await auth(cnpj, password);

    if (data.user && data.token) {
      setUser(data.user);
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
