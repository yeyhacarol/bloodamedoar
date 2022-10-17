import styles from "./AboutBloodcenter.module.css";

import Container from "../layout/Container/Container";

/* PASSAR CONTEÚDO POR PROPS */

const AboutBloodcenter = () => {
  return (
    <Container customClass={styles.all_about_us}>
      <div className={styles.about_us}>
        <h3>Sobre nós</h3>
        <p>Seja bem-vindo ao nosso perfil. Atendemos via whats</p>
      </div>
      <div className={styles.about_us}>
        <h3>Horário de atendimento</h3>
        <p>
          Segunda a sexta das 8:00 às 17:00. Feriados e finais de semana das
          08:00 às 13:00
        </p>
      </div>
      <div className={styles.about_us}>
        <h3>Tipos de serviço</h3>
        <div className={styles.services}>
          <p>Sangue</p>
          <div className={styles.line}></div>
          <p>Plaqueta</p>
          <div className={styles.line}></div>
          <p>Medula</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutBloodcenter;
