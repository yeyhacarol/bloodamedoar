import { get } from "../../services/apiBlood/http/get";
import { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import CampaignSlider from "../../components/donativeCampaign/CampaignSlider/CampaignSlider";
import List from "../../components/list/List/List";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../../components/layout/Footer/Footer";
import Requirements from "../../components/Requirements/Requirements";
import StepByStep from "../../components/StepByStep/StepByStep";
import CampaignCard from "../../components/donativeCampaign/CampaignCard/CampaignCard";

const Home = () => {
  const [campaign, setCampain] = useState([]);

  useEffect(() => {
    get("/listarCampanhas")
      .then((response) => {
        setCampain(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.home_container}>
      <Menu
        label="Hemocentros"
        alt="Lista de hemocentros"
        title="Lista de hemocentros"
      />

      <div className={styles.home_content}>
        <Header action="Entrar" />

        {campaign.length > 0 && (
          <CampaignSlider title="Campanhas para você" items={campaign.length}>
            {campaign.map((item) => (
              <CampaignCard
                key={item.id}
                link={`/campaign/${item.id}`}
                bloodcenterCard={false}
                title={item.nome}
                background={item.foto_capa}
              />
            ))}
          </CampaignSlider>
        )}

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
