import styles from "./Bloodcenters.module.css";

import { BsSearch } from "react-icons/bs";

import profile from "../../assets/bloobs/profile.svg";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import Input from "../../components/form/Input/Input";
import ListItem from "../../components/list/ListItem/ListItem";
import { useState, useEffect } from "react";
import { get } from "../../services/apiBlood/http/get";
import { capitalize } from "../../utils/capitalize";
import { cepMask } from "../../utils/masks";

const Bloodcenters = () => {
  const [bloodcenter, setBloodcenter] = useState([]);

  useEffect(() => {
    get("/listarHemocentro")
      .then((response) => {
        const resp = response[0];
        setBloodcenter(resp);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Menu label="Hemocentros" alt="Hemocentros" title="Hemocentros" />

      <div className={styles.bloodcenter_list_content}>
        <Header action="Entrar" />

        <div className={styles.listing}>
          <div className={styles.filter}>
            <Input
              custom={styles.custom_input}
              placeholder="Pesquise hemocentros perto de você"
            />
            <div className={styles.search}>
              <BsSearch size={30} />
            </div>
          </div>

          {bloodcenter.map((data) => (
            <ListItem
              key={data.id}
              logo={data.foto_perfil ? data.foto_perfil : profile}
              name={data.nome_unidade}
              address={
                data.logradouro.split(",")[0] +
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
      </div>
    </>
  );
};

export default Bloodcenters;