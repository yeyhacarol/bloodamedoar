import styles from "./ContactUs.module.css";

import Container from "../../layout/Container/Container";
import Input from "../../form/Input/Input";
import Submit from "../../form/Submit/Submit";

const ContactUs = () => {
  return (
    <section className={styles.contact_us}>
      <Container customClass={styles.contact_us_container}>
        <form className={styles.contact_us_form}>
          <h3>Fale conosco</h3>
          <p>Mande-nos sugestões de como melhorar a plataforma.</p>
          <Input
            placeholder="Seu nome" /* mask={} name="name" value={} handleOnChange={}  */
          />
          <Input
            placeholder="Seu e-mail"
            type="email" /* mask={} name="name" value={} handleOnChange={} */
          />
          <Input
            placeholder="Assunto" /* mask={} name="name" value={} handleOnChange={} */
          />
          <Input
            placeholder="Mensagem" /* mask={} name="name" value={} handleOnChange={} */
          />
          <Submit action="Enviar" />
        </form>

        <div className={styles.bloobs}></div>
      </Container>
    </section>
  );
};

export default ContactUs;
