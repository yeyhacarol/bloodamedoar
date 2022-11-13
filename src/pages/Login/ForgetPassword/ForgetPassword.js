import styles from "./ForgetPassword.module.css";

import ModalLogo from "../../../components/logo/ModalLogo/ModalLogo";
import Heading from "../../../components/Heading/Heading";
import Input from "../../../components/form/Input/Input";
import Submit from "../../../components/form/Submit/Submit";

import close from "../../../assets/bloobs/close.png";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

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

        <form>
          <Input
            type="email"
            placeholder="Seu e-mail"
            label="Seu e-mail"
            name="email" /* error={} errorMessage={} value={} handleOnChange={} */
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
