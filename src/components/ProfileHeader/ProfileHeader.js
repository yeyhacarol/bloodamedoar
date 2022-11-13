import styles from "./ProfileHeader.module.css";

import Button from "../layout/Button/Button";

const ProfileHeader = ({ customHeader, cape, photo, bloodcenter }) => {
  return (
    <div className={`${styles.header} ${customHeader}`}>
      <img className={cape} src={cape} alt={bloodcenter} />
      <div className={styles.profile}>
        <img src={photo} alt={bloodcenter} />
        <Button
          action="Editar perfil"
          link="/bloodcenter/profile/edit/"
          customClass={styles.edit}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
