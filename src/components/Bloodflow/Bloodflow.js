import styles from "./Bloodflow.module.css";

import bloodflow from "../../assets/bloodFlow/bloodflow.svg";

const Bloodflow = ({ text, bft1, bft2, bf3 }) => {
  return (
    <div className={styles.our_benefits}>
      <img src={bloodflow} alt="Nossos benefícios" />
      <div className={styles.benefits}>
        <p></p>
        <div className={styles.hand}>
          <icon></icon>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Bloodflow;
