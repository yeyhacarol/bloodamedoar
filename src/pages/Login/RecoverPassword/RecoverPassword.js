import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import styles from "./RecoverPassword.module.css";
import Heading from "../../../components/Heading/Heading";
import bloobers from "../../../assets/bloobs/bloobers.svg";
import Input from "../../../components/form/Input/Input";
import { useEffect, useState } from "react";
import Submit from "../../../components/form/Submit/Submit";
import { validate } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pwd } from "../../../utils/regex";
import { put } from "../../../services/apiBlood/http/put";

const RecoverPassword = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const token = searchParams.get("token");
  const protocol = searchParams.get("protocol");

  const [data, setData] = useState({
    email: "",
    senha: "",
    confirmacaoSenha: "",
  });

  const [error, setError] = useState({
    email: {
      error: false,
      errorMessage: "",
    },
    senha: {
      error: false,
      errorMessage: "",
    },
    confirmacaoSenha: {
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
      return setError({
        ...error,
        email: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!data.senha) {
      return setError({
        ...error,
        senha: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!pwd.test(data.senha)) {
      return setError({
        ...error,
        senha: {
          error: true,
          errorMessage:
            "Senha deve conter 8 dígitos incluindo letras de A-z, números e caracteres especiais.",
        },
      });
    }

    if (data.confirmacaoSenha !== data.senha) {
      return setError({
        ...error,
        confirmacaoSenha: {
          error: true,
          errorMessage: "Senhas não coincidem.",
        },
      });
    }

    delete data.confirmacaoSenha;

    put("/redefinirSenha", data.email, data);

    navigate("/bloodcenter/login");
  };

  useEffect(() => {
    if (!validate(protocol) || !token) {
      navigate("/");
    }
  }, [protocol, token]);

  return (
    <div className={styles.container_recover_password}>
      <img src={bloobers} alt="Decoração" className={styles.bloobers} />

      <div className={styles.logo}>
        <IconLogo />
      </div>

      <div className={styles.recover_password}>
        <form
          className={styles.recover_password_content}
          onSubmit={handleOnSubmit}
        >
          <Heading heading="Alterar senha" />

          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            error={error.email.error}
            errorMessage={error.email.errorMessage}
            value={data.email || ""}
            handleOnChange={handleOnChange}
            onFocus={() => setError({ ...error, email: false })}
          />

          <Input
            name="senha"
            type="password"
            placeholder="Sua senha"
            error={error.senha.error}
            errorMessage={error.senha.errorMessage}
            value={data.senha || ""}
            handleOnChange={handleOnChange}
            onFocus={() => setError({ ...error, senha: false })}
          />

          <Input
            name="confirmacaoSenha"
            type="password"
            placeholder="Confirme sua senha"
            error={error.confirmacaoSenha.error}
            errorMessage={error.confirmacaoSenha.errorMessage}
            value={data.confirmacaoSenha || ""}
            handleOnChange={handleOnChange}
            onFocus={() => setError({ ...error, confirmacaoSenha: false })}
          />

          <Submit action="Confirmar" />
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
