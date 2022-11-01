import { Link, useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";

import IconLogo from "../../logo/IconLogo/IconLogo";
import Home from "../../../assets/menuIcons/home.png";
import List from "../../../assets/menuIcons/list.png";
import Profile from "../../../assets/menuIcons/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

const Menu = ({ label, alt, title }) => {
  const auth = useContext(AuthContext);

  let navigation;

  if (!auth.user) {
    navigation = "/identification";
  } else {
    navigation = "/bloodcenter/profile";
  }

  return (
    <div className={styles.container_menu}>
      <div className={styles.logo}>
        <IconLogo />
      </div>

      <nav className={styles.menu}>
        <Link to="/" className={styles.a}>
          <div className={styles.menu_item}>
            <img src={Home} alt="Página inicial" title="Página inicial" />
            <p>Página inicial</p>
          </div>
        </Link>
        <Link to="/hemocenterlist" className={styles.a}>
          <div className={`${styles.menu_item} ${styles.list}`}>
            <img src={List} alt={alt} title={title} />
            <p>{label}</p>
          </div>
        </Link>
        <Link to={navigation} className={styles.a}>
          <div className={`${styles.menu_item} ${styles.profile}`}>
            <img src={Profile} alt="Perfil" title="Perfil" />
            <p>Perfil</p>
          </div>
        </Link>
      </nav>

      <div className={styles.copyright}>
        <div className={styles.horizontal_line}></div>

        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Menu;
