import { Link } from "react-router-dom";
import styles from "./Inventory.module.css";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../../../../contexts/Auth/AuthContext";

import Inventory from "../../../../../components/Inventory/Inventory";
import Container from "../../../../../components/layout/Container/Container";
import Selection from "../../../../../components/form/Select/Selection";
import Submit from "../../../../../components/form/Submit/Submit";
import get from "../../../../../services/apiBlood/get";
import getById from "../../../../../services/apiBlood/getById";

const CurrentInventory = () => {
  const auth = useContext(AuthContext);

  const [currentInventory, setCurrentInventory] = useState();

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

    get("/listarNiveisSangue").then((resp) => {
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

  const [errors, setErrors] = useState({
    tipo_sanguineo: {
      error: false,
      errorMessage: false,
    },
    nivel_sangue: {
      error: false,
      errorMessage: false,
    },
  });

  const BASE_URL = process.env.REACT_APP_API_BLOOD;

  const bloodInventory = (e) => {
    e.preventDefault();

    if (!data.id_tipo_sanguineo) {
      return setErrors({
        ...errors,
        tipo_sanguineo: {
          error: true,
          errorMessage: "Selecione um tipo sanguíneo.",
        },
      });
    }

    if (!data.id_nivel_sangue) {
      return setErrors({
        ...errors,
        nivel_sangue: {
          error: true,
          errorMessage: "Selecione o nível de sangue.",
        },
      });
    }

    fetch(BASE_URL + "/cadastrarEstoqueSangue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          getById("/listarEstoqueSangue", auth.user).then((data) =>
            setCurrentInventory(data[0])
          );
          toast.success(data.message);
          return;
        } else if (data.error) {
          return toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getById("/listarEstoqueSangue", auth.user).then((data) =>
      setCurrentInventory(data[0])
    );
  }, [auth.user]);

  return (
    <form className={styles.inventory}>
      <Inventory
        title="Estoque atual"
        custom={styles.container}
        customLevels={styles.levels}
        currentInventory={currentInventory}
      />

      <Container title="Posições de estoque" customClass={styles.container}>
        <div className={styles.content}>
          <Selection
            closeMenuOnSelect={true}
            placeholder="Tipo sanguíneo"
            error={errors.tipo_sanguineo.error}
            errorMessage={errors.tipo_sanguineo.errorMessage}
            name="id_tipo_sanguineo"
            message="Sem tipos sanguíneos"
            options={bloodType}
            handleOnChange={handleOnChange}
            onFocus={() => setErrors({ ...errors, tipo_sanguineo: false })}
          />
          <Selection
            closeMenuOnSelect={true}
            placeholder="Nível"
            error={errors.nivel_sangue.error}
            errorMessage={errors.nivel_sangue.errorMessage}
            name="id_nivel_sangue"
            message="Sem níveis"
            options={level}
            handleOnChange={handleOnChange}
            onFocus={() => setErrors({ ...errors, nivel_sangue: false })}
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
