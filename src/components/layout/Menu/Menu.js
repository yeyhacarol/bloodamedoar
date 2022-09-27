import styles from "./Menu.module.css";

import IconLogo from "../../logo/IconLogo/IconLogo";
import Home from "../../../assets/menuIcons/home.png";
import List from "../../../assets/menuIcons/list.png";
import Profile from "../../../assets/menuIcons/profile.png";

const Menu = ({ icon, label }) => {
  return (
    <div className={styles.container_menu}>
      <div className={styles.logo}>
        <IconLogo />
      </div>

      <nav className={styles.menu}>
        <div className={styles.menu_item}>
          <img src={Home} alt="Página inicial" title="Página inicial" />
          <p>Página inicial</p>
        </div>
        <div className={`${styles.menu_item} ${styles.list}`}>
          <img
            src={List}
            alt="Lista de hemocentros"
            title="Lista de hemocentros"
          />
          <p>Hemocentros</p>
        </div>
        <div className={`${styles.menu_item} ${styles.profile}`}>
          <img src={Profile} alt="Perfil" title="Perfil" />
          <p>Perfil</p>
        </div>
      </nav>

      <div className={styles.copyright}>
        <div className={styles.horizontal_line}></div>

        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Menu;
