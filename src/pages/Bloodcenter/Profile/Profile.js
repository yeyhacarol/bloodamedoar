import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

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

        <Inventory />

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
      </div>

      {/* <div>PERFIL DO HEMOCENTRO</div>
      {auth.user && <button onClick={handleLogout}>sair</button>} */}
    </div>
  );
};

export default Profile;
