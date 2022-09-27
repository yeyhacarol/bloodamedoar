import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineUser,
} from "react-icons/hi";

import styles from "./Menu.module.css";

import IconLogo from "../../../components/Logo/IconLogo/IconLogo";

const Menu = ({ icon, label }) => {
  return (
    <div className={styles.container_menu}>
      <IconLogo />

      <nav className={styles.menu}>
        <div className={styles.menu_item}>
          <HiOutlineHome size={30} color="#757575" />
          <p>Página inicial</p>
        </div>
        <div className={styles.menu_item}>
          <HiOutlineDocumentText size={30} color="#757575" />
          <p>Hemocentros</p>
        </div>
        <div className={styles.menu_item}>
          <HiOutlineUser size={30} color="#757575" />
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
