import styles from "./Steps.module.css";

import step from "../../assets/bloobs/step.svg";

const Steps = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <img src={step} alt="Primeira etapa" />
        <span>1</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <img src={step} alt="Segundo etapa" />
        <span>2</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <img src={step} alt="Terceira etapa" />
        <span>3</span>
      </div>
    </div>
  );
};

export default Steps;
