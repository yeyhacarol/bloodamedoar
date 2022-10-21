import styles from "./EditProfile.module.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import BloodcenterData from "./forms/BloodcenterData/BloodcenterData";

const EditProfile = () => {
  return (
    <div className={styles.edit_profile_container}>
      <Menu
        label="Consultas"
        alt="Lista de consultas"
        title="Lista de consultas"
      />

      <div className={styles.edit_profile_content}>
        <div className={styles.header}>
          <Header span="Edite seu perfil" />
        </div>
        <ProfileHeader
          customHeader={styles.profile_header}
          cape={styles.cape}
        />

        <Tabs className={styles.edit_container}>
          <TabList className={styles.edit_nav}>
            <Tab className={styles.edit}>Hemocentro</Tab>
            <Tab className={styles.edit}>Estoque</Tab>
            <Tab className={styles.edit}>Agenda</Tab>
            <Tab className={styles.edit}>Campanhas</Tab>
          </TabList>

          <TabPanel>
            <BloodcenterData />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EditProfile;
