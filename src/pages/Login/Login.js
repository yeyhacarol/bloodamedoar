import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import bloobers from "../../assets/bloobs/bloobers.svg";

import Heading from "../../components/Heading/Heading";
import IconLogo from "../../components/logo/IconLogo/IconLogo";
import Input from "../../components/form/Input/Input";
import Button from "../../components/layout/Button/Button";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    cnpj: "",
    senha: "",
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    cnpj: {
      error: false,
      errorMessage: false,
    },
    senha: {
      error: false,
      errorMessage: false,
    },
  });

  const handleOnSubmit = async () => {
    if (!data.cnpj) {
      return setErrors({
        ...errors,
        cnpj: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!data.senha) {
      return setErrors({
        ...errors,
        senha: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (data.cnpj && data.senha) {
      const isLogged = await auth.signin({
        cnpj: data.cnpj,
        senha: data.senha,
      });

      if (isLogged) {
        navigate("/bloodcenter/profile");
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.login_content}>
        <Heading heading="Conectar-se" />
        <form>
          <Input
            placeholder="CNPJ"
            mask="00.000.000/0000-00"
            name="cnpj"
            value={data.cnpj}
            handleOnChange={handleOnChange}
            error={errors.cnpj.error}
            errorMessage={errors.cnpj.errorMessage}
            onFocus={() => setErrors({ ...errors, cnpj: false })}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Senha"
            name="senha"
            value={data.senha}
            handleOnChange={handleOnChange}
            error={errors.senha.error}
            errorMessage={errors.senha.errorMessage}
            onFocus={() => setErrors({ ...errors, senha: false })}
          />

          <div className={styles.about_pwd}>
            <Input type="checkbox" label="Lembrar-me" name="rememberMe" />
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
          </div>

          <Button
            customClass={styles.signin}
            action="Entrar"
            link="/bloodcenter/profile"
            onClick={handleOnSubmit}
          />
          <div className={styles.hasnt_account}>
            <p>
              Novo por aqui?
              <Link to="/bloodcenter/registration">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
      <img src={bloobers} alt="Decoração" className={styles.bloobers} />
    </div>
  );
};

export default Login;
