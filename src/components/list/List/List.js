import { Link } from "react-router-dom";
import styles from "./List.module.css";

import Container from "../../layout/Container/Container";
import ListItem from "../ListItem/ListItem";

import profile from "../../../assets/bloobs/profile.svg";

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
    <>
      {bloodcenter.length > 0 && (
        <Container title="Hemocentros" customClass={styles.container}>
          <div className={styles.list_content}>
            {bloodcenter.map((data) => (
              <ListItem
                key={data.id}
                logo={data.foto_perfil ? data.foto_perfil : profile}
                name={data.nome_unidade}
                info={
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
      )}
    </>
  );
};

export default List;
