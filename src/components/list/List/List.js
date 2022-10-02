import styles from "./List.module.css";

import Container from "../../layout/Container/Container";
import ListItem from "../ListItem/ListItem";

import logo from "../../../assets/hemocentro-campinas.jpg";

const List = () => {
  /* CONSUMIR API E TRAZER DADOS DINÂMICOS */

  return (
    <Container title="Hemocentros" customClass={styles.container}>
      <div className={styles.list_content}>
        <ListItem
          logo={logo}
          name="Hemocentro Campinas"
          address="Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade Universitária, Campinas - SP, 13083-878"
        />
      </div>
      <a href="/">Ver todos hemocentros.</a>
    </Container>
  );
};

export default List;
