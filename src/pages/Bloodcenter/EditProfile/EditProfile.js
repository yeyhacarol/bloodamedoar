import styles from "./EditProfile.module.css";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";

const EditProfile = () => {
  return (
    <div className={styles.edit_profile_container}>
      <Menu
        label="Consultas"
        alt="Lista de consultas"
        title="Lista de consultas"
      />

      <Header span="Edite seu perfil" />

      <div className={styles.edit_profile_content}>
        <ProfileHeader customHeader={styles.profile_header} />
      </div>
    </div>
  );
};

export default EditProfile;
