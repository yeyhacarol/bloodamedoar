import styles from "./EditProfile.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FiMoreVertical, FiLogIn } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

import Menu from "../../../components/layout/Menu/Menu";
import Header from "../../../components/Header/Header";
import BloodcenterData from "./forms/BloodcenterData/BloodcenterData";
import CurrentInventory from "./forms/Inventory/Inventory";
import Campaign from "./forms/Campaign/Campaign";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useState } from "react";
import Disable from "./forms/Disable/Disable";
import { getById } from "../../../services/apiBlood/http/get";
import Schedule from "./forms/Schedule/Schedule";

import profile from "../../../assets/bloobs/profile 1.1.svg";
import cape from "../../../assets/bloobs/cape.svg";

const EditProfile = () => {
  const auth = useContext(AuthContext);

  const [visible, setVisible] = useState(false);

  const [data, setData] = useState();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();

    navigate("/");
  };

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

  const { tab, id } = useParams();

  useEffect(() => {
    getById("/listarHemocentroPorId", auth.user).then((response) => {
      const resp = response[0][0];

      setData(resp);
    });
  }, []);

  if (!data) {
    return;
  }

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
          <span className={styles.tooltip}>Sair?</span>
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

        <Tabs
          className={styles.edit_container}
          defaultIndex={parseInt(tab) || 0}
        >
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
            <BloodcenterData setVisible={setVisible} />
          </TabPanel>
          <TabPanel>
            <CurrentInventory
              setVisible={setVisible}
              cape={data.foto_capa ? data.foto_capa : cape}
              photo={data.foto_perfil ? data.foto_perfil : profile}
              bloodcenter={data.nome_unidade}
            />
          </TabPanel>
          <TabPanel>
            <Schedule
              setVisible={setVisible}
              cape={data.foto_capa ? data.foto_capa : cape}
              photo={data.foto_perfil ? data.foto_perfil : profile}
              bloodcenter={data.nome_unidade}
            />
          </TabPanel>
          <TabPanel>
            <Campaign
              setVisible={setVisible}
              cape={data.foto_capa ? data.foto_capa : cape}
              photo={data.foto_perfil ? data.foto_perfil : profile}
              bloodcenter={data.nome_unidade}
            />
          </TabPanel>
        </Tabs>
        <div className={styles.disable}>
          <Disable setVisible={setVisible} visible={visible} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
