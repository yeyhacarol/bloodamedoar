import styles from "./CampaignCard.module.css";

import Button from "../../layout/Button/Button";

const CampaignCard = ({ background, title, catchphrase, bloodcenterCard }) => {
  return (
    <div
      className={styles.card_container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.card_content}>
        <h2>{title}</h2>
        <p>{catchphrase}</p>
        <Button
          customClass={styles.custom_button}
          action="Ver mais"
          link="/seemorecampaign"
        />
        {bloodcenterCard ? (
          <Button
            customClass={styles.custom_button}
            action="Editar"
            link="/bloodcenter/profile/edit"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;
