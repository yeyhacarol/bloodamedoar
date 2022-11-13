import styles from "./Header.module.css";

import IconLogo from "../logo/IconLogo/IconLogo";
import Button from "../../components/layout/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ span, action }) => {
  const auth = useContext(AuthContext);

  let navigate = useNavigate();

  if (auth.user) {
    navigate = "/bloodcenter/profile";
  } else {
    navigate = "/bloodcenter/login";
  }

  return (
    <div className={styles.header_container}>
      {action ? (
        <div className={styles.logo}>
          <IconLogo />
        </div>
      ) : (
        <></>
      )}

      {span ? <div>{span ? <span>{span}</span> : <></>}</div> : <></>}

      {action ? (
        <div className={styles.button}>
          <Button action={action} link={navigate} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
