import styles from "./Bloodflow.module.css";

import { FiCalendar, FiSmile } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

const Bloodflow = ({ text, bft1, bft2, bf3 }) => {
  return (
    <div className={styles.our_benefits}>
      <div className={styles.benefits}>
        <h2>Junte-se a nós e ganhe produtividade nos seus atendimentos!</h2>
        <div className={styles.hand}>
          <FiCalendar size={30} />
          <p>Monte sua agenda</p>
        </div>
        <div className={styles.hand}>
          <AiOutlineHistory size={30} />
          <p>Mostre a posição dos seu estoque</p>
        </div>
        <div className={styles.hand}>
          <FiSmile size={30} />
          <p>Crie campanhas</p>
        </div>
      </div>
    </div>
  );
};

export default Bloodflow;
