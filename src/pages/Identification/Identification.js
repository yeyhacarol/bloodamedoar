import styles from "./Identification.module.css";

import bloow from "../../assets/bloodFlow/bloow.png";

import IconLogo from "../../components/logo/IconLogo/IconLogo";
import Button from "../../components/layout/Button/Button";
import Footer from "../../components/layout/Footer/Footer";

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
          />
          <Button
            customClass={styles.custom_button}
            action="Quero receber doações"
            id="2"
            link="/login"
          />
        </div>
      </div>
      <div>
        <img
          src={bloow}
          alt="Imagem de fundo do rodapé"
          className={styles.bloow}
        />
        <Footer
          customClass={styles.custom_footer}
          customized={styles.custom_copy}
        />
      </div>
    </div>
  );
};

export default Identification;
