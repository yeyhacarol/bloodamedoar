import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./CampaignSlider.module.css";

import Container from "../../layout/Container/Container";

const CompaignSlider = ({ customClass, title, children, items }) => {
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
    let listWidth = items * 300;

    if (window.innerWidth - listWidth > scroll) {
      scroll = window.innerWidth - listWidth - 40;
    }

    setScrollX(scroll);
  };

  return (
    <Container title={title} customClass={`${styles.container} ${customClass}`}>
      <div className={styles.arrow_left} onClick={handleLeftArrow}>
        <IoIosArrowBack size={45} color="#fff" />
      </div>

      <div className={styles.arrow_right} onClick={handleRightArrow}>
        <IoIosArrowForward size={45} color="#fff" />
      </div>

      <div className={styles.slider}>
        <div
          className={styles.slider_content}
          style={{ marginLeft: scrollX, width: items * 300 }}
        >
          {children}
        </div>
      </div>
    </Container>
  );
};

export default CompaignSlider;
