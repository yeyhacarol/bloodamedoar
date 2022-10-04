import { Link } from "react-router-dom";

import styles from "./Login.module.css";

import bloobers from "../../assets/bloobs/bloobers.svg";

import Heading from "../../components/Heading/Heading";
import IconLogo from "../../components/logo/IconLogo/IconLogo";
import Input from "../../components/form/Input/Input";
import Submit from "../../components/form/Submit/Submit";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.login_content}>
        <Heading heading="Conectar-se" />
        <form>
          <Input placeholder="CNPJ" mask="00.000.000/0000-00" name="cnpj" />
          <Input type="password" placeholder="Senha" name="password" />

          <div className={styles.about_pwd}>
            <Input type="checkbox" label="Lembrar-me" name="rememberMe" />
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
          </div>

          <Submit
            action="Entrar"
            instruction="Novo por aqui?"
            link="Cadastre-se"
            to="/registration"
            customClass={styles.custom_button}
          />
        </form>
      </div>
      <img src={bloobers} alt="Decoração" className={styles.bloobers} />
    </div>
  );
};

export default Login;
