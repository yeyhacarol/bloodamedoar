import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import CampaignSlider from "../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import List from "../../components/list/List/List";
import ContactUs from "../../components/forms/ContactUs/ContactUs";
import Footer from "../../components/layout/Footer/Footer";
import Requirements from "../../components/Requirements/Requirements";
import StepByStep from "../../components/StepByStep/StepByStep";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Menu
        label="Hemocentros"
        alt="Lista de hemocentros"
        title="Lista de hemocentros"
      />

      <div className={styles.home_content}>
        <Header action="Entrar" />

        <CampaignSlider />

        <List />

        <Requirements />

        <StepByStep />

        <ContactUs />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
