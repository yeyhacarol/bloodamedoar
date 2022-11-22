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
import { v4 as uuidv4 } from "uuid";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    email: "",
  });

  const [error, setError] = useState({
    email: {
      error: false,
      errorMessage: "",
    },
  });

  const handleOnChange = (value, input) => {
    setEmail((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email.email) {
      return setError({
        email: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    const BASE_URL = process.env.REACT_APP_API_BLOOD;

    fetch(BASE_URL + "/verificarEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success(data.message);

          const templateParams = {
            email: email.email,
            url: `http://localhost:3001/recoverpassword?token=${
              data.token
            }&protocol=${uuidv4()}`,
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
              setEmail("");
            })
            .catch((error) => console.error(error));
          return;
        } else if (data.error) {
          toast.error(data.error);
          return;
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
          Informe-nos seu e-mail para que possamos possibilitar a recuperação de
          senha.
        </p>

        <form onSubmit={handleOnSubmit}>
          <Input
            type="email"
            placeholder="Seu e-mail"
            label="Seu e-mail"
            name="email"
            error={error.email.error}
            errorMessage={error.email.errorMessage}
            value={email.email || ""}
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
