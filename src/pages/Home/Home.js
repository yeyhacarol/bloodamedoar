import styles from "./Home.module.css";

import Menu from "../../components/layout/Menu/Menu";
import Submit from "../../components/form/Submit/Submit";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Menu />

      <div className={styles.home_content}>
        <div className={styles.home_header}>
          <Submit action="Entrar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
