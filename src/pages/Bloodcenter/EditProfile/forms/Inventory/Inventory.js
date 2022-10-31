import { Link } from "react-router-dom";
import styles from "./Inventory.module.css";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../../../../contexts/Auth/AuthContext";

import Inventory from "../../../../../components/Inventory/Inventory";
import Container from "../../../../../components/layout/Container/Container";
import Selection from "../../../../../components/form/Select/Selection";
import Submit from "../../../../../components/form/Submit/Submit";
import get from "../../../../../services/apiBlood/get";

const CurrentInventory = () => {
  const auth = useContext(AuthContext);

  const [data, setData] = useState({
    id_tipo_sanguineo: "",
    id_nivel_sangue: "",
    id_unidade_hemocentro: auth.user,
  });
  const [bloodType, setBloodType] = useState([]);
  const [level, setLevel] = useState([]);

  useEffect(() => {
    let id_bloodType = [];
    let id_level = [];

    get("/listarTipoSanguineo").then((resp) => {
      resp.map((blood) => {
        return id_bloodType.push({
          value: `${blood.id}`,
          label: blood.tipo_sanguineo,
        });
      });

      setBloodType(id_bloodType);
    });

    get("/listarNiveis").then((resp) => {
      resp.map((level) => {
        return id_level.push({
          value: `${level.id}`,
          label: level.nivel_sangue,
        });
      });

      setLevel(id_level);
    });
  }, []);

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input.value }));
  };

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const bloodInventory = (e) => {
    e.preventDefault();

    fetch(BASE_URL + "/estoqueSangue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form className={styles.inventory}>
      <Inventory
        title="Estoque atual"
        custom={styles.container}
        customLevels={styles.levels}
      />

      <Container title="Posições de estoque" customClass={styles.container}>
        <div className={styles.content}>
          <Selection
            closeMenuOnSelect={true}
            placeholder="Tipo sanguíneo"
            /* error={} errorMessage={} */ name="id_tipo_sanguineo"
            message="Sem tipos sanguíneos"
            options={bloodType}
            handleOnChange={handleOnChange}
            // value={data.id_tipo_sanguineo}
          />
          <Selection
            closeMenuOnSelect={true}
            placeholder="Nível"
            /* error={} errorMessage={} */ name="id_nivel_sangue"
            message="Sem níveis"
            options={level}
            handleOnChange={handleOnChange}
            // value={data.id_nivel_sangue}
          />
        </div>
      </Container>

      <div className={styles.action}>
        <Submit
          action="Salvar"
          customClass={styles.save}
          handleOnClick={bloodInventory}
        />
        <Link>Desativar conta</Link>
      </div>
    </form>
  );
};

export default CurrentInventory;
