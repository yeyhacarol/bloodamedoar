import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

import IconLogo from "../../logo/IconLogo/IconLogo";
import Home from "../../../assets/menuIcons/home.png";
import List from "../../../assets/menuIcons/list.png";
import Profile from "../../../assets/menuIcons/profile.png";
import Query from "../../../assets/menuIcons/query.png";

import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

const Menu = () => {
  const auth = useContext(AuthContext);

  let navigation;

  if (!auth.user) {
    navigation = "/bloodcenter/login";
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
        <Link to="/bloodcenters" className={styles.a}>
          <div className={`${styles.menu_item} ${styles.list}`}>
            <img
              src={List}
              alt="Lista de hemocentros"
              title="Lista de hemocentros"
            />
            <p>Hemocentros</p>
          </div>
        </Link>
        <Link to={navigation} className={styles.a}>
          <div className={`${styles.menu_item} ${styles.profile}`}>
            <img src={Profile} alt="Perfil" title="Perfil" />
            <p>Perfil</p>
          </div>
        </Link>
        {auth.user && (
          <Link to="/scheduledappointment" className={styles.a}>
            <div className={`${styles.menu_item} ${styles.query}`}>
              <img
                src={Query}
                alt="Consultas agendadas"
                title="Consultas agendadas"
              />
              <p>Consultas agendadas</p>
            </div>
          </Link>
        )}
      </nav>

      <div className={styles.copyright}>
        <div className={styles.horizontal_line}></div>

        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Menu;
