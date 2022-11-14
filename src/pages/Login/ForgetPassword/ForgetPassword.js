import styles from "./ForgetPassword.module.css";

import emailjs from "@emailjs/browser";

import ModalLogo from "../../../components/logo/ModalLogo/ModalLogo";
import Heading from "../../../components/Heading/Heading";
import Input from "../../../components/form/Input/Input";
import Submit from "../../../components/form/Submit/Submit";

import close from "../../../assets/bloobs/close.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
  });

  const [error, setError] = useState({
    email: {
      error: false,
      errorMessage: "",
    },
  });

  const handleOnChange = (value, input) => {
    setData((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!data.email) {
      setError({
        email: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    const templateParams = {
      email: data.email,
    };

    emailjs
      .send(
        "service_d7j679c",
        "template_vw2im6p",
        templateParams,
        "siS2mdPzClHgjeTlw"
      )
      .then((response) => {
        toast.success("Verifique seu e-mail.");
        setData("");
      })
      .catch((error) => console.error(error));

    console.log(data);
  };

  return (
    <div className={styles.forgetpassword}>
      <div className={styles.close_container} onClick={() => navigate(-1)}>
        <div className={styles.close}>
          <img src={close} alt="Fechar modal" title="Fechar modal?" />
          <span>X</span>
        </div>
      </div>

      <div className={styles.forgetpassword_content}>
        <div className={styles.logo}>
          <ModalLogo />
        </div>

        <Heading heading="Recuperação de senha" />

        <p className={styles.obs}>
          Para ajudar a proteger sua conta, nós queremos confirmar se é
          realmente você que está tentando fazer login.
        </p>

        <form onSubmit={handleOnSubmit}>
          <Input
            type="email"
            placeholder="Seu e-mail"
            label="Seu e-mail"
            name="email"
            error={error.email.error}
            errorMessage={error.email.errorMessage}
            value={data.email || ""}
            handleOnChange={handleOnChange}
            onFocus={() => setError({ ...error, email: false })}
          />
          <Submit action="Confirmar" />
        </form>

        <div className={styles.verify}>
          <h3>Verifique seu e-mail</h3>
          <p>
            Te enviamos um e-mail. Toque no link que te mandamos para conseguir
            redefinir sua senha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
