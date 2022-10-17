import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import CampaignSlider from "../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import List from "../../components/list/List/List";
import ContactUs from "../../components/forms/ContactUs/ContactUs";
import Footer from "../../components/layout/Footer/Footer";
import Requirements from "../../components/Requirements/Requirements";
import StepByStep from "../../components/StepByStep/StepByStep";
import CampaignCard from "../../components/donativeCampaign/CampaignCard/CampaignCard";

import donation from "../../assets/blood-donation.jpg";

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

        <CampaignSlider title="Campanhas para você">
          <CampaignCard
            title="Doe sangue!"
            catchphrase="Salve a vida de muitos!"
            background={donation}
          />
        </CampaignSlider>

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
