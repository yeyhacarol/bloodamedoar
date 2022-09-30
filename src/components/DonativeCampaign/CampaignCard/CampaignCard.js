import styles from "./CampaignCard.module.css";

import Submit from "../../form/Submit/Submit";

const CampaignCard = ({ background, title, catchphrase }) => {
  return (
    <div
      className={styles.card_container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.card_content}>
        <h2>{title}</h2>
        <p>{catchphrase}</p>
        <Submit customClass={styles.custom_button} action="Ver mais" />
      </div>
    </div>
  );
};

export default CampaignCard;
