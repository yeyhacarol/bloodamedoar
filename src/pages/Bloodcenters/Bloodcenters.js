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
import Filter from "../../components/Filter/Filter";

const Bloodcenters = () => {
  const [bloodcenters, setBloodcenters] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [data, setData] = useState({
    bloodcenter: "",
  });

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
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
    if (selectedValue)
      return bloodcenters.filter((item) => item.id === parseInt(selectedValue));
    else if (data.bloodcenter)
      return bloodcenters.filter(
        (item) =>
          item.uf.toLowerCase().includes(data.bloodcenter.toLowerCase()) ||
          item.estado.toLowerCase().includes(data.bloodcenter.toLowerCase()) ||
          item.cidade.toLowerCase().includes(data.bloodcenter.toLowerCase()) ||
          item.bairro.toLowerCase().includes(data.bloodcenter.toLowerCase()) ||
          item.logradouro.toLowerCase().includes(data.bloodcenter.toLowerCase())
      );
    else return bloodcenters;
  }, [bloodcenters, data.bloodcenter, selectedValue]);

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
              info="Pesquise por nome"
              placeholder="Pesquise por nome"
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
          <Filter
            placeholder="Pesquise por endereço"
            name="bloodcenter"
            value={data.bloodcenter || ""}
            handleOnChange={handleOnChange}
          />

          <div className={styles.bloodcenters}>
            {filteredBloodcenter.length > 0 ? (
              filteredBloodcenter.map((data) => (
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
              ))
            ) : (
              <p className={styles.no_bloodcenter}>
                Não temos esse hemocentro cadastrado.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloodcenters;
