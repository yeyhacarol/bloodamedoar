import styles from "./IconLogo.module.css";

import logoIcon from "../../../assets/logo-icon.png";

const IconLogo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoIcon} alt="Ícone do logo" />
      <div className={styles.brand}>
        <h1>BLOOD</h1>
        <p>AmeDoar</p>
      </div>
    </div>
  );
};

export default IconLogo;
