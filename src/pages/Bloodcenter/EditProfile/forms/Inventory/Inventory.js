import { Link } from "react-router-dom";
import styles from "./Inventory.module.css";

import Inventory from "../../../../../components/Inventory/Inventory";
import Container from "../../../../../components/layout/Container/Container";
import Selection from "../../../../../components/form/Select/Selection";
import Submit from "../../../../../components/form/Submit/Submit";

const CurrentInventory = () => {
  return (
    <form className={styles.inventory}>
      <Inventory title="Estoque atual" custom={styles.container} customLevels={styles.levels}/>

      <Container title="Posições de estoque" customClass={styles.container}>
        <div className={styles.content}>
          <Selection
            closeMenuOnSelect={true}
            placeholder="Tipo sanguíneo" /* error={} errorMessage={} name="" message="Sem tipos sanguíneos" options={} handleOnChange={}  value={} */
          />
          <Selection
            closeMenuOnSelect={true}
            placeholder="Nível" /* error={} errorMessage={} name="" message="Sem níveis" options={} handleOnChange={}  value={} */
          />
        </div>
      </Container>

      <div className={styles.action}>
        <Submit action="Salvar" customClass={styles.save} />
        <Link>Desativar conta</Link>
      </div>
    </form>
  );
};

export default CurrentInventory;
