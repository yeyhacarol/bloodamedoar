import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

import IconLogo from "../../logo/IconLogo/IconLogo";
import Home from "../../../assets/menuIcons/home.png";
import List from "../../../assets/menuIcons/list.png";
import Profile from "../../../assets/menuIcons/profile.png";

const Menu = ({ label, alt, title }) => {
  return (
    <div className={styles.container_menu}>
      <div className={styles.logo}>
        <Link to="/">
          <IconLogo />
        </Link>
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
        <Link to="/profile" className={styles.a}>
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
