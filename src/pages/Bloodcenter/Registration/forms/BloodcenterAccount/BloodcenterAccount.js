import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { pwd } from "../../../../../utils/regex";

import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";

const TAB_INDEX = 0;

const BloodcenterAccount = ({ setTabIndex, setTabSteps }) => {
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
      errorMessage: "",
    },
    confirmacaoSenha: {
      error: false,
      errorMessage: "",
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

    setErrors({
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
        errorMessage: "",
      },
      confirmacaoSenha: {
        error: false,
        errorMessage: "",
      },
    });

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
        console.log(data);
        if (data.message) {
          localStorage.removeItem("data");
          toast(data.message);
          setInterval(500, navigate("/bloodcenter/login"));
          return;
        } else if (data.error) {
          localStorage.removeItem("data");
          toast.error(data.error);
          setInterval(500, setTabIndex(TAB_INDEX));
          return;
        }
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
        info="Número de celular"
        placeholder="(00) 00000-0000"
        error={errors.celular.error}
        errorMessage={errors.celular.errorMessage}
        name="celular"
        value={data.celular || ""}
        handleOnChange={handleOnChange}
        onFocus={() => setErrors({ ...errors, celular: false })}
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
        handleOnClick={handleValidate}
      />
    </form>
  );
};

export default BloodcenterAccount;
