import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./CampaignSlider.module.css";

import Container from "../../layout/Container/Container";
import CampaignCard from "../CampaignCard/CampaignCard";

const CompaignSlider = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let scroll = scrollX + Math.round(window.innerWidth / 2);

    if (scroll > 0) {
      scroll = 0;
    }

    setScrollX(scroll);
  };

  const handleRightArrow = () => {
    let scroll = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = 8 * 330;

    if (window.innerWidth - listWidth > scroll) {
      scroll = window.innerWidth - listWidth - 35;
    }

    setScrollX(scroll);
  };

  return (
    <Container customClass={styles.container}>
      <h3>Campanhas</h3>

      <div className={styles.arrow_left} onClick={handleLeftArrow}>
        <IoIosArrowBack size={45} color="#fff" />
      </div>

      <div className={styles.arrow_right} onClick={handleRightArrow}>
        <IoIosArrowForward size={45} color="#fff" />
      </div>

      <div className={styles.slider}>
        <div
          className={styles.slider_content}
          style={{ marginLeft: scrollX, width: 8 * 330 }}
        >
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
