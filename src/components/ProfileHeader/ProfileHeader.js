import styles from "./ProfileHeader.module.css";

import Button from "../layout/Button/Button";

import capa from "../../assets/cape.png";
import hemocentro from "../../assets/hemocentro-campinas.jpg";

const ProfileHeader = ({ customHeader, cape, profile, bloodcenter }) => {
  return (
    <div className={`${styles.header} ${customHeader}`}>
      <img src={capa} alt={bloodcenter} />
      <div className={styles.profile}>
        <img src={hemocentro} alt={bloodcenter} />
        <Button
          action="Editar perfil"
          link="/bloodcenter/profile/edit"
          customClass={styles.edit}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
