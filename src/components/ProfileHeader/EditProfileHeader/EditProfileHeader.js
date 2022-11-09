import styles from "./EditProfileHeader.module.css";

import Button from "../../layout/Button/Button";

import capa from "../../../assets/cape.png";
import hemocentro from "../../../assets/hemocentro-campinas.jpg";

const EditProfileHeader = ({ customHeader, cape, bloodcenter }) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <label htmlFor="capeImg" className={styles.edit_cape}>
          <div className={styles.edit}>Editar capa</div>
        </label>
        <input id="capeImg" type="file" className={styles.edit_cape_input} />
      </div>
      <label htmlFor="profileImg" className={styles.edit_photo}>
        <p>Editar foto</p>
        <img src={hemocentro} />
      </label>
      <input id="profileImg" type="file" className={styles.edit_photo_input} />
    </div>
  );
};

export default EditProfileHeader;
