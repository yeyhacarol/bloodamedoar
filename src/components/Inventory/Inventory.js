import styles from "./Inventory.module.css";

import Container from "../layout/Container/Container";

import critical from "../../assets/bloodLevels/critical.png";
import warning from "../../assets/bloodLevels/warning.png";
import stable from "../../assets/bloodLevels/stable.png";

const Inventory = ({ title, custom, customLevels, currentInventory }) => {
  if (currentInventory === undefined) {
    return <>Carregando...</>;
  }

  const getBloodLevel = (bloodLevel) => {
    if (bloodLevel === "Crítico") return critical;
    if (bloodLevel === "Alerta") return warning;
    if (bloodLevel === "Estável") return stable;
  };

  return (
    <Container customClass={`${styles.our_inventory} ${custom}`}>
      <h3>{title}</h3>

      <div className={`${styles.blood_levels} ${customLevels}`}>
        {currentInventory.map((current) => {
          return (
            <div className={styles.level} key={current.estoque_sangue}>
              <img src={getBloodLevel(current.nivel)} />
              <p>{current.tipo_sanguineo}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Inventory;
