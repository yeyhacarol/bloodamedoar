import { Link } from "react-router-dom";
import styles from "./List.module.css";

import Container from "../../layout/Container/Container";
import ListItem from "../ListItem/ListItem";

import logo from "../../../assets/hemocentro-campinas.jpg";
import { get } from "../../../services/apiBlood/http/get";
import { useState, useEffect } from "react";
import { capitalize } from "../../../utils/capitalize";
import { cepMask } from "../../../utils/masks";

const List = () => {
  const [bloodcenter, setBloodcenter] = useState([]);

  useEffect(() => {
    get("/listaHemocentroLimitada")
      .then((response) => {
        const resp = response[0];
        setBloodcenter(resp);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container title="Hemocentros" customClass={styles.container}>
      <div className={styles.list_content}>
        {bloodcenter.map((data) => (
          <ListItem
            key={data.id}
            logo={logo}
            name={data.nome_unidade}
            address={
              data.logradouro +
              ", " +
              data.numero +
              " - " +
              capitalize(data.bairro) +
              ", " +
              data.cidade +
              " - " +
              data.uf +
              ", " +
              cepMask(data.cep) +
              "."
            }
            link={`/bloodcenters/${data.id}`}
          />
        ))}
      </div>
      <Link to="/bloodcenters" className={styles.bloodcenters}>
        Ver todos hemocentros.
      </Link>
    </Container>
  );
};

export default List;
