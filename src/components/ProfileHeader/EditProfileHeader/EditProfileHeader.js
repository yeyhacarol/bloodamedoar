import styles from "./EditProfileHeader.module.css";

import Button from "../../layout/Button/Button";

import capa from "../../../assets/cape.png";
import bloodcenter from "../../../assets/hemocentro-campinas.jpg";

const EditProfileHeader = ({ capeOnChange, photoOnChange, background }) => {
  return (
    <div className={styles.header_container}>
      <div
        className={styles.header}
        //style={{ backgroundImage: `url(${background})` }}
      >
        <label htmlFor="capeImg" className={styles.edit_cape}>
          <div className={styles.edit}>Editar capa</div>
        </label>
        <input
          id="capeImg"
          type="file"
          className={styles.edit_cape_input}
          onChange={capeOnChange}
        />
      </div>
      <label htmlFor="profileImg" className={styles.edit_photo}>
        <p>Editar foto</p>
        <img src={bloodcenter} />
      </label>
      <input
        id="profileImg"
        type="file"
        className={styles.edit_photo_input}
        onChange={photoOnChange}
      />
    </div>
  );
};

export default EditProfileHeader;
