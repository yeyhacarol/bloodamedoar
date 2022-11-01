import styles from "./EditProfile.module.css";

import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FiMoreVertical, FiLogIn } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import BloodcenterData from "./forms/BloodcenterData/BloodcenterData";
import CurrentInventory from "./forms/Inventory/Inventory";
import Campaign from "./forms/Campaign/Campaign";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

const EditProfile = () => {
  const openNav = () => {
    let nav = document.getElementById("nav");

    if (nav.style.display === "block") {
      nav.style.display = "flex";
      nav.style.transform = "translateX(-113px)";
    } else {
      nav.style.display = "block";
      nav.style.transform = "translateX(0px)";
    }
  };

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();

    navigate("/");
  };

  return (
    <div className={styles.edit_profile_container}>
      <Menu
        label="Consultas"
        alt="Lista de consultas"
        title="Lista de consultas"
      />

      {auth.user && (
        <div className={styles.out}>
          <FiLogIn size={40} title="Sair?" onClick={handleLogout} />
        </div>
      )}

      <div className={styles.edit_profile_content}>
        <div className={styles.header}>
          <Header span="Edite seu perfil" />
        </div>

        <div
          className={styles.back}
          onClick={() => navigate("/bloodcenter/profile")}
        >
          <IoMdArrowRoundBack size={30} />
          <p>Voltar</p>
        </div>

        <ProfileHeader
          customHeader={styles.profile_header}
          cape={styles.cape}
        />
        <Tabs className={styles.edit_container}>
          <TabList className={styles.edit_nav}>
            <div className={styles.open_nav} onClick={openNav}>
              <FiMoreVertical size={25} color="#757575" />
            </div>
            <div id="nav" className={styles.nav}>
              <Tab className={styles.edit}>Hemocentro</Tab>
              <Tab className={styles.edit}>Estoque</Tab>
              <Tab className={styles.edit}>Agenda</Tab>
              <Tab className={styles.edit}>Campanhas</Tab>
            </div>
          </TabList>

          <TabPanel>
            <BloodcenterData />
          </TabPanel>
          <TabPanel>
            <CurrentInventory />
          </TabPanel>
          <TabPanel>
            <h1>AGENDA</h1>
          </TabPanel>
          <TabPanel>
            <Campaign />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EditProfile;
