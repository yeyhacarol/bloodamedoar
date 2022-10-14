import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

import styles from "./Profile.module.css";

const Profile = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();

    navigate("/");
  };

  return (
    <>
      <div>PERFIL DO HEMOCENTRO</div>
      {auth.user && <button onClick={handleLogout}>sair</button>}
    </>
  );
};

export default Profile;
