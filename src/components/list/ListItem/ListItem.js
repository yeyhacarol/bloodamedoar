import styles from "./ListItem.module.css";

import Submit from "../../form/Submit/Submit";

import logo from "../../../assets/hemocentro-campinas.jpg";

const ListItem = () => {
  return (
    <div className={styles.list_item_container}>
      <div className={styles.list_item_content}>
        <img src={logo} alt="Foto de perfil do hemocentro" />
        <div className={styles.list_item_data}>
          <h4>Hemocentro Campinas</h4>
          <p>
            Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade
            Universitária, Campinas - SP, 13083-878
          </p>
        </div>
      </div>
      <Submit customClass={styles.custom_button} action="Ver mais" />
    </div>
  );
};

export default ListItem;
