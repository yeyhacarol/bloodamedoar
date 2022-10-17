import styles from "./ProfileHeader.module.css";

import Button from "../layout/Button/Button";

import capa from "../../assets/cape.png";
import hemocentro from "../../assets/hemocentro-campinas.jpg";

const ProfileHeader = ({ cape, profile, bloodcenter }) => {
  return (
    <div className={styles.header}>
      <img src={capa} alt={bloodcenter} />
      <div className={styles.profile}>
        <img src={hemocentro} alt={bloodcenter} />
        <Button action="Editar perfil" customClass={styles.edit} />
      </div>
    </div>
  );
};

export default ProfileHeader;
