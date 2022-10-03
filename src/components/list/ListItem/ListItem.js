import styles from "./ListItem.module.css";

import Button from "../../layout/Button/Button";

const ListItem = ({ logo, name, address, link }) => {
  return (
    <div className={styles.list_item_container}>
      <div className={styles.list_item_content}>
        <img src={logo} alt={name} />
        <div className={styles.list_item_data}>
          <h4>{name}</h4>
          <p>{address}</p>
        </div>
      </div>
      <Button
        customClass={styles.custom_button}
        action="Ver mais"
        link={link}
      />
    </div>
  );
};

export default ListItem;
