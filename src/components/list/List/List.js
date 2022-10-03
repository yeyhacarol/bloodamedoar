import { Link } from "react-router-dom";
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
          link="/seebloodcenter"
        />
      </div>
      <Link to="/seeallbloodcenters" className={styles.bloodcenters}>
        Ver todos hemocentros.
      </Link>
    </Container>
  );
};

export default List;
