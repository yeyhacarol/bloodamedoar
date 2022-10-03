import styles from "./Identification.module.css";

import IconLogo from "../../components/logo/IconLogo/IconLogo";
import Button from "../../components/layout/Button/Button";

const Identification = () => {
  return (
    <div className={styles.identification_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.identification_content}>
        <div className={styles.welcome}>
          <h1>Bem-vindo!</h1>
          <p>Antes de tudo, o que você deseja?</p>
        </div>
        <div className={styles.choice}>
          <Button
            customClass={styles.custom_button}
            action="Quero doar"
            id="1"
            link="/donor"
          />
          <Button
            customClass={styles.custom_button}
            action="Quero receber doações"
            id="2"
            link="/hemocenter"
          />
        </div>
      </div>
    </div>
  );
};

export default Identification;
