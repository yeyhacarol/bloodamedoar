import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";

import CampaignCard from "../../components/DonativeCampaign/CampaignCard/CampaignCard";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Menu />

      <div className={styles.home_content}>
        <Header action="Entrar" />

        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
    </div>
  );
};

export default Home;
