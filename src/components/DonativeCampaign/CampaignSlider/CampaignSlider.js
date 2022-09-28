import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./CampaignSlider.module.css";

import Container from "../../layout/Container/Container";
import CampaignCard from "../CampaignCard/CampaignCard";

const CompaignSlider = () => {
  return (
    <Container customClass={styles.container}>
      <h3>Campanhas</h3>

      <div className={styles.arrow_left}>
        <IoIosArrowBack size={45} color="#fff" />
      </div>

      <div className={styles.arrow_right}>
        <IoIosArrowForward size={45} color="#fff" />
      </div>

      <div className={styles.slider}>
        <div className={styles.slider_content}>
          <div className={styles.slider_item}>
            <CampaignCard />
          </div>
          <div className={styles.slider_item}>
            <CampaignCard />
          </div>
          <div className={styles.slider_item}>
            <CampaignCard />
          </div>
          <div className={styles.slider_item}>
            <CampaignCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CompaignSlider;
