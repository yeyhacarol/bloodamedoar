import styles from "./ListItem.module.css";

import Submit from "../../form/Submit/Submit";

const ListItem = ({ logo, name, address }) => {
  return (
    <div className={styles.list_item_container}>
      <div className={styles.list_item_content}>
        <img src={logo} alt={name} />
        <div className={styles.list_item_data}>
          <h4>{name}</h4>
          <p>{address}</p>
        </div>
      </div>
      <Submit customClass={styles.custom_button} action="Ver mais" />
    </div>
  );
};

export default ListItem;
