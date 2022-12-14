import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { pwd } from "../../../../../utils/regex";

import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";

const TAB_INDEX = 0;

const BloodcenterAccount = ({ setTabIndex }) => {
  const initialData = JSON.parse(localStorage.getItem("data"));

  const [data, setData] = useState(
    initialData || {
      celular: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
    }
  );

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    celular: {
      error: false,
      errorMessage: "",
    },
    email: {
      error: false,
      errorMessage: "",
    },
    senha: {
      error: false,
      errorMessage: false,
    },
    confirmacaoSenha: {
      error: false,
      errorMessage: false,
    },
  });

  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();

    if (!data.celular) {
      return setErrors({
        ...errors,
        celular: {
          error: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (data.celular.length !== 11) {
      return setErrors({
        ...errors,
        celular: {
          error: true,
          errorMessage: "Número inválido.",
        },
      });
    }

    if (!data.email) {
      return setErrors({
        ...errors,
        email: {
          error: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (!data.senha) {
      return setErrors({
        ...errors,
        senha: {
          error: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (!pwd.test(data.senha)) {
      return setErrors({
        ...errors,
        senha: {
          error: true,
          errorMessage:
            "Senha deve conter 8 dígitos incluindo letras de A-z, números e caracteres especiais.",
        },
      });
    }

    if (data.confirmacaoSenha !== data.senha) {
      return setErrors({
        ...errors,
        confirmacaoSenha: {
          error: true,
          errorMessage: "Senhas não coincidem.",
        },
      });
    }

    localStorage.setItem("data", JSON.stringify({ ...initialData, ...data }));
    delete data["confirmacaoSenha"];

    const BASE_URL = process.env.REACT_APP_API_BLOOD;

    fetch(BASE_URL + "/cadastrarHemocentro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          localStorage.removeItem("data");
          navigate("/bloodcenter/login");
          return;
        } else if (data.error) {
          toast.error(data.error);
          localStorage.removeItem("data");
          setTabIndex(TAB_INDEX);
          return;
        }

        localStorage.removeItem("data");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleValidate}>
      <h3>Contato</h3>
      <Input
        mask="(00) 00000-0000"
        placeholder="(00) 00000-0000"
        info="Número de celular"
        error={errors.celular.error}
        errorMessage={errors.celular.errorMessage}
        name="celular"
        value={data.celular || ""}
        handleOnChange={handleOnChange}
        onFocus={() => setErrors({ ...errors, celular: false })}
        autoComplete="off"
      />
      <Input
        type="email"
        info="E-mail"
        placeholder="seuemail@gmail.com"
        error={errors.email.error}
        errorMessage={errors.email.errorMessage}
        name="email"
        value={data.email || ""}
        handleOnChange={handleOnChange}
        onFocus={() => setErrors({ ...errors, email: false })}
        autoComplete="off"
      />

      <h3>Conta</h3>
      <Input
        type="password"
        placeholder="Senha"
        error={errors.senha.error}
        errorMessage={errors.senha.errorMessage}
        name="senha"
        value={data.senha || ""}
        handleOnChange={handleOnChange}
        onFocus={() => setErrors({ ...errors, senha: false })}
      />
      <Input
        type="password"
        placeholder="Confirmação de senha"
        error={errors.confirmacaoSenha.error}
        errorMessage={errors.confirmacaoSenha.errorMessage}
        name="confirmacaoSenha"
        value={data.confirmacaoSenha || ""}
        handleOnChange={handleOnChange}
        onFocus={() => setErrors({ ...errors, confirmacaoSenha: false })}
      />

      <Submit
        action="Cadastrar"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/bloodcenter/login"
      />
    </form>
  );
};

export default BloodcenterAccount;
