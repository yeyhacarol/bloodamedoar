import styles from "./Bloodcenters.module.css";

import profile from "../../assets/bloobs/profile.svg";

import Menu from "../../components/layout/Menu/Menu";
import Header from "../../components/Header/Header";
import ListItem from "../../components/list/ListItem/ListItem";
import { useState, useEffect, useMemo } from "react";
import { get } from "../../services/apiBlood/http/get";
import { capitalize } from "../../utils/capitalize";
import { cepMask } from "../../utils/masks";
import Selection from "../../components/form/Select/Selection";

const Bloodcenters = () => {
  const [bloodcenters, setBloodcenters] = useState([]);

  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  useEffect(() => {
    get("/listarHemocentro")
      .then((response) => {
        const resp = response[0];
        setBloodcenters(resp);
      })
      .catch((error) => console.error(error));
  }, []);

  const bloodcenter = useMemo(() => {
    return bloodcenters.map((bloodcenter) => {
      return {
        value: `${bloodcenter.id}`,
        label: bloodcenter.nome_unidade,
      };
    });
  }, [bloodcenters]);

  const filteredBloodcenter = useMemo(() => {
    return selectedValue
      ? bloodcenters.filter((item) => item.id == selectedValue)
      : bloodcenters;
  }, [bloodcenter, bloodcenters, selectedValue]);

  return (
    <>
      <Menu />

      <div className={styles.bloodcenter_list_content}>
        <Header action="Entrar" />

        <div className={styles.listing}>
          <div className={styles.filter}>
            <Selection
              width="inherit"
              customized={styles.filtered}
              closeMenuOnSelect={true}
              placeholder="Pesquise hemocentros perto de você"
              name="bloodcenters"
              message="Sem hemocentros para mostrar"
              options={bloodcenter && bloodcenter}
              handleOnChange={handleChange}
            />
            <div
              className={styles.clear}
              onClick={() => {
                setSelectedValue(undefined);
              }}
            >
              X
            </div>
          </div>

          <div className={styles.bloodcenters}>
            {filteredBloodcenter.map((data) => (
              <ListItem
                key={data.id}
                logo={data.foto_perfil ? data.foto_perfil : profile}
                name={data.nome_unidade}
                info={
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
      </div>
    </>
  );
};

export default Bloodcenters;
