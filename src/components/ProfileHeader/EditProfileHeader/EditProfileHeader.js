import styles from "./EditProfileHeader.module.css";

import profile from "../../../assets/bloobs/profile 1.1.svg";
import cape from "../../../assets/bloobs/cape.svg";

const EditProfileHeader = ({
  capeOnChange,
  photoOnChange,
  background,
  bloodcenter,
}) => {
  return (
    <div className={styles.header_container}>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${background ? background : cape})` }}
      >
        <div className={styles.edit_container}>
          <label htmlFor="capeImg" className={styles.edit_cape}>
            <div className={styles.edit}>Editar capa</div>
          </label>
        </div>
        <input
          id="capeImg"
          type="file"
          className={styles.edit_cape_input}
          onChange={capeOnChange}
        />
      </div>
      <label htmlFor="profileImg" className={styles.edit_photo}>
        <p>Editar foto</p>
        <img src={bloodcenter ? bloodcenter : profile} alt={bloodcenter} />
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
