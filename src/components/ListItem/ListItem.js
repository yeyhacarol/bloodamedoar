import styles from "./ListItem.module.css";

import Container from "../layout/Container/Container";
import Submit from "../form/Submit/Submit";

const ListItem = () => {
  return (
    <Container title="Hemocentros">
      <div className={styles.list_item_container}>
        <div className={styles.list_item_content}>
          <img src="" alt="Foto de perfil do hemocentro" />
          <div className={styles.list_item_data}>
            <h4>Hemocentro Campinas</h4>
            <p>
              Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade
              Universitária, Campinas - SP, 13083-878
            </p>
          </div>
          <Submit action="Ver mais" />
        </div>
      </div>
    </Container>
  );
};

export default ListItem;
