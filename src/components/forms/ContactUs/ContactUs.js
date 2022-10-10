import { useState } from "react";
import { onlyLetters } from "../../../utils/regex";

import styles from "./ContactUs.module.css";

import Container from "../../layout/Container/Container";
import Input from "../../form/Input/Input";
import Submit from "../../form/Submit/Submit";

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleOnChange = (value, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleValidate = (e) => {
    e.preventDefault();

    if (!inputs.email) {
      return setErrors({ errors, email: true });
    }

    if (!inputs.subject) {
      return setErrors({ errors, subject: true });
    }

    if (!inputs.message) {
      return setErrors({ errors, message: true });
    }

    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
  };

  return (
    <section className={styles.contact_us}>
      <Container customClass={styles.contact_us_container}>
        <form className={styles.contact_us_form} onSubmit={handleValidate}>
          <h3>Fale conosco</h3>
          <p>Mande-nos sugestões de como melhorar a plataforma.</p>
          <Input
            placeholder="Seu nome"
            mask={onlyLetters}
            name="name"
            value={inputs.name}
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Seu e-mail"
            type="email"
            name="email"
            value={inputs.email}
            error={errors.email}
            errorMessage="Preencha seu e-mail."
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Assunto"
            name="subject"
            value={inputs.subject}
            error={errors.subject}
            errorMessage="Preencha o assunto."
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Mensagem"
            name="message"
            value={inputs.message}
            error={errors.message}
            errorMessage="Qual a mensagem?"
            handleOnChange={handleOnChange}
          />
          <Submit action="Enviar" />
        </form>

        <div className={styles.bloobs}></div>
      </Container>
    </section>
  );
};

export default ContactUs;
