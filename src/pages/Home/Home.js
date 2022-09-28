import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import CampaignSlider from "../../components/DonativeCampaign/CampaignSlider/CampaignSlider";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Menu />

      <div className={styles.home_content}>
        <Header action="Entrar" />

        <CampaignSlider />
      </div>
    </div>
  );
};

export default Home;
