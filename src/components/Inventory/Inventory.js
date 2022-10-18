import styles from "./Inventory.module.css";

import Container from "../layout/Container/Container";

import critical from "../../assets/bloodLevels/critical.png";
import warning from "../../assets/bloodLevels/warning.png";
import stable from "../../assets/bloodLevels/stable.png";

const Inventory = () => {
  return (
    <Container customClass={styles.our_inventory}>
      <h3>Nosso estoque</h3>

      <div className={styles.blood_levels}>
        <div className={styles.level}>
          <img src={critical} alt="Sangue: A+" />
          <p>A+</p>
        </div>
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