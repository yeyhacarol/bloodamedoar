import styles from "./AboutBloodcenter.module.css";

import Container from "../layout/Container/Container";

const AboutBloodcenter = ({
  biography,
  opening,
  telephone,
  celular,
  email,
  services,
}) => {
  return (
    <Container customClass={styles.all_about_us}>
      {biography && (
        <div className={styles.about_us}>
          <h3>Sobre nós</h3>
          {biography && <p>{biography}</p>}
        </div>
      )}
      {opening && (
        <div className={styles.about_us}>
          <h3>Horário de atendimento</h3>
          <p>{opening}</p>
        </div>
      )}

      <div className={styles.about_us}>
        <h3>Contato</h3>
        {telephone && <p>Telefone: {telephone} </p>}
        {celular && <p>Celular: {celular} </p>}
        {email && <p>Celular: {email} </p>}
      </div>

      {services && (
        <div className={styles.about_us}>
          <h3>Tipos de serviço</h3>
          <div className={styles.services}>
            {services && services.join(" | ")}
          </div>
        </div>
      )}
    </Container>
  );
};

export default AboutBloodcenter;
