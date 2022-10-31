import styles from "./Inventory.module.css";

import getById from "../../services/apiBlood/getById";

import Container from "../layout/Container/Container";

import critical from "../../assets/bloodLevels/critical.png";
import warning from "../../assets/bloodLevels/warning.png";
import stable from "../../assets/bloodLevels/stable.png";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext, useState } from "react";

const Inventory = ({ title, custom, customLevels }) => {
  /*   const auth = useContext(AuthContext);
  const [currentInventory, setCurrentInventory] = useState();

  getById("/estoqueSangue", auth.user)
    .then((resp) => setCurrentInventory(resp))
    .catch((error) => console.error(error));

  const getBloodLevel = (bloodLevel) => {
    if (bloodLevel === "Crítico") return critical;
    if (bloodLevel === "Alerta") return warning;
    if (bloodLevel === "Estável") return stable;
  }; */

  return (
    <Container customClass={`${styles.our_inventory} ${custom}`}>
      <h3>{title}</h3>

      <div className={`${styles.blood_levels} ${customLevels}`}>
        {/* {currentInventory.map((current) => {
          return (
            <div className={styles.level}>
              <img src={getBloodLevel(current.nivel_sangue)} alt="Sangue: A+" />
              <p>{current.tipo_sanguineo}</p>
            </div>
          );
        })} */}

        <div className={styles.level}>
          <img src={warning} alt="Sangue: A-" />
          <p>A-</p>
        </div>
        <div className={styles.level}>
          <img src={stable} alt="Sangue: B+" />
          <p>B+</p>
        </div>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: B-" />
          <p>B-</p>
        </div>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: AB+" />
          <p>AB+</p>
        </div>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: AB-" />
          <p>AB-</p>
        </div>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: O+" />
          <p>O+</p>
        </div>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: O-" />
          <p>O-</p>
        </div>
      </div>
    </Container>
  );
};

export default Inventory;
