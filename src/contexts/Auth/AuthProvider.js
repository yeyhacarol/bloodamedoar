import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {
  login,
  logout,
  validateToken,
} from "../../services/apiBlood/authentication";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = async () => {
      const storageData = JSON.parse(localStorage.getItem("authToken"));

      if (storageData) {
        setUser(storageData.id);
      }
    };

    token();
  }, []);

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
      setToken(data);
      return true;
    }

    return false;
  };

  const signout = async () => {
    await logout();
    setUser(null);
    localStorage.removeItem("authToken");
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", JSON.stringify(token));
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
