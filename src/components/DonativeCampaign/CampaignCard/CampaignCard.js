import Submit from "../../form/Submit/Submit";
import styles from "./CampaignCard.module.css";

const CampaignCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <h2>SEJA UM HERÓI</h2>
        <p>Estenda a mão para um ato solidário.</p>
        <Submit customClass={styles.custom_button} action="Ver mais" />
      </div>
    </div>
  );
};

export default CampaignCard;
