import { Link } from "react-router-dom";

import styles from "./Login.module.css";

import Heading from "../../components/Heading/Heading";
import IconLogo from "../../components/logo/IconLogo/IconLogo";
import Input from "../../components/form/Input/Input";
import Submit from "../../components/form/Submit/Submit";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <IconLogo />
      <div className={styles.login_content}>
        <Heading heading="Conectar-se" />
        <form>
          <Input />
          <Input />

          <div className={styles.about_pwd}>
            <Input />
            <Link to="/forgetpassword" />
          </div>

          <Submit
            action="Entrar"
            instruction="Novo por aqui?"
            link="Cadastre-se."
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
