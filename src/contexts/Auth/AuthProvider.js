import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {
  login,
  logout,
  /* validateToken, */
} from "../../services/apiBlood/authentication";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(null);

  /*   useEffect(() => {
    const token = async () => {
      const storageData = localStorage.getItem("authToken");

      console.log(storageData);

      if (storageData) {
        const data = await validateToken(storageData);

        console.log(auth.user);

        if (data.user) {
          setUser(data.user);
          setToken(data.token);
        }
      }
    };

    token();
  }, []); */

  const signin = async (cnpj, password) => {
    const data = await login(cnpj, password);

    if (data.error === "Senha incorreta.") {
      toast.error(data.error);
    }

    if (data.error === "CNPJ inválido.") {
      toast.error(data.error);
    }

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
