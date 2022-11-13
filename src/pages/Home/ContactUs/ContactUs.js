import { useState } from "react";
import { onlyLetters } from "../../../utils/regex";

import emailjs from "@emailjs/browser";

import styles from "./ContactUs.module.css";

import Container from "../../../components/layout/Container/Container";
import Input from "../../../components/form/Input/Input";
import Textarea from "../../../components/form/Textarea/Textarea";
import Submit from "../../../components/form/Submit/Submit";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleOnChange = (value, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!inputs.email) {
      return setErrors({ errors, email: true });
    }

    if (!inputs.message) {
      return setErrors({ errors, message: true });
    }

    const templateParams = {
      from_name: inputs.name,
      email: inputs.email,
      message: inputs.message,
    };

    emailjs
      .send(
        "service_kk4azlt",
        "template_ltbu2cw",
        templateParams,
        "siS2mdPzClHgjeTlw"
      )
      .then((response) => {
        toast.success("E-mail enviado com sucesso.");
        setInputs("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className={styles.contact_us}>
      <Container customClass={styles.contact_us_container}>
        <form className={styles.contact_us_form} onSubmit={handleOnSubmit}>
          <h3>Fale conosco</h3>
          <p>Mande-nos sugestões de como melhorar a plataforma.</p>
          <Input
            placeholder="Seu nome"
            mask={onlyLetters}
            name="name"
            value={inputs.name || ""}
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Seu e-mail"
            type="email"
            name="email"
            value={inputs.email || ""}
            error={errors.email}
            errorMessage="Preencha seu e-mail."
            handleOnChange={handleOnChange}
            onFocus={() => setErrors({ ...errors, email: false })}
          />
          <Textarea
            custom={styles.textarea}
            placeholder="Mensagem"
            name="message"
            value={inputs.message || ""}
            error={errors.message}
            errorMessage="Qual a mensagem?"
            handleOnChange={handleOnChange}
            onFocus={() => setErrors({ ...errors, message: false })}
          />
          <Submit action="Enviar" />
        </form>

        <div className={styles.bloobs}></div>
      </Container>
    </section>
  );
};

export default ContactUs;
