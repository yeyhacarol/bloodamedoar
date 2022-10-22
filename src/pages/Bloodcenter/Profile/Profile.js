import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import { FiCalendar, FiSmile, FiDroplet } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

import styles from "./Profile.module.css";

import Menu from "../../../components/layout/Menu/Menu";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import AboutBloodcenter from "../../../components/AboutBloodcenter/AboutBloodcenter";
import Inventory from "../../../components/Inventory/Inventory";
import CampaignSlider from "../../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import CampaignCard from "../../../components/donativeCampaign/CampaignCard/CampaignCard";

import donation from "../../../assets/blood-donation.jpg";

const Profile = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();

    navigate("/");
  };

  let rotationAngle = Math.round(window.innerWidth);

  if (rotationAngle < 1025) {
    rotationAngle = -190;
  } else {
    rotationAngle = 360;
  }

  /* CONSUMIR API PARA TRAZER OS DADOS DINÂMICOS */

  return (
    <div className={styles.profile_container}>
      <Menu
        label="Consultas"
        alt="Lista de consultas"
        title="Lista de consultas"
      />

      <div className={styles.profile_content}>
        <ProfileHeader />

        <div className={styles.introduction}>
          <h2>Hemocentro Campinas</h2>
          <p>
            Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade
            Universitária, Campinas - SP, 13083-878
          </p>
        </div>

        <AboutBloodcenter />

        <Inventory title="Nosso estoque" />

        <CampaignSlider
          customClass={styles.our_campaigns}
          title="Nossas campanhas"
        >
          <CampaignCard
            bloodcenterCard={true}
            title="SEJA O HERÓI DE ALGUÉM"
            catchphrase="Você pode salvar muitas vidas em apenas 15 minutos!"
            background={donation}
          />
        </CampaignSlider>

        <CircleMenu
          className={styles.menu}
          startAngle={-90}
          rotationAngle={rotationAngle}
          itemSize={1.5}
          radius={3}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            tooltip="Criar campanha"
            className={`${styles.menu_item} ${styles.first}`}
          >
            <FiSmile size={20} />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Estoque" className={styles.menu_item}>
            <FiDroplet size={20} />
          </CircleMenuItem>
          <CircleMenuItem tooltip="Agenda" className={styles.menu_item}>
            <FiCalendar size={20} />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Consultas agendadas"
            className={styles.menu_item}
          >
            <AiOutlineHistory size={20} />
          </CircleMenuItem>
        </CircleMenu>
      </div>

      {/* <div>PERFIL DO HEMOCENTRO</div>
      {auth.user && <button onClick={handleLogout}>sair</button>} */}
    </div>
  );
};

export default Profile;
