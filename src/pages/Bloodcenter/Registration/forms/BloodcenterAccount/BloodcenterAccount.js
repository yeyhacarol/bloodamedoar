import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { pwd } from "../../../../../utils/regex";

import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";

const BloodcenterAccount = () => {
  const initialData = JSON.parse(localStorage.getItem("data"));

  const [data, setData] = useState(
    initialData || {
      celular: "",
      email: "",
      senha: "",
    }
  );

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    telephone: {
      number: false,
      errorMessage: false,
    },
    email: {
      field: false,
      errorMessage: false,
    },
    password: {
      number: false,
      errorMessage: false,
    },
    confirmPassword: {
      number: false,
      errorMessage: false,
    },
  });

  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();

    if (!data.celular) {
      return setErrors({
        ...errors,
        telephone: {
          number: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (data.celular.length !== 11) {
      return setErrors({
        ...errors,
        telephone: {
          number: true,
          errorMessage: "Número inválido.",
        },
      });
    }

    if (!data.email) {
      return setErrors({
        ...errors,
        email: {
          field: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (!data.senha) {
      return setErrors({
        ...errors,
        password: {
          number: true,
          errorMessage: "Campo obrigatório.",
        },
      });
    }

    if (!pwd.test(data.senha)) {
      return setErrors({
        ...errors,
        password: {
          number: true,
          errorMessage:
            "Senha deve conter 8 dígitos incluindo letras de A-z, números e caracteres especiais.",
        },
      });
    }

    if (data.confirmPassword !== data.senha) {
      return setErrors({
        ...errors,
        confirmPassword: {
          number: true,
          errorMessage: "Senhas não coincidem.",
        },
      });
    }

    setErrors({
      telephone: {
        number: false,
        errorMessage: false,
      },
      email: {
        field: false,
        errorMessage: false,
      },
      password: {
        number: false,
        errorMessage: false,
      },
      confirmPassword: {
        number: false,
        errorMessage: false,
      },
    });

    localStorage.setItem("data", JSON.stringify({ ...initialData, ...data }));

    delete data["confirmPassword"];

    const BASE_URL = process.env.REACT_APP_BASE_URL;

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
        localStorage.removeItem("data");
      })
      .catch((err) => console.log(err));

    navigate("/bloodcenter/login");
  };

  return (
    <form onSubmit={handleValidate}>
      <h3>Contato</h3>
      <Input
        mask="(00) 00000-0000"
        placeholder="Número de celular"
        error={errors.telephone.number}
        errorMessage={errors.telephone.errorMessage}
        name="celular"
        value={data.celular || ""}
        handleOnChange={handleOnChange}
      />
      <Input
        type="email"
        placeholder="E-mail"
        error={errors.email.field}
        errorMessage={errors.email.errorMessage}
        name="email"
        value={data.email || ""}
        handleOnChange={handleOnChange}
      />

      <h3>Conta</h3>
      <Input
        type="password"
        placeholder="Senha"
        error={errors.password.number}
        errorMessage={errors.password.errorMessage}
        name="senha"
        value={data.senha || ""}
        handleOnChange={handleOnChange}
      />
      <Input
        type="password"
        placeholder="Confirmação de senha"
        error={errors.confirmPassword.number}
        errorMessage={errors.confirmPassword.errorMessage}
        name="confirmPassword"
        value={data.confirmPassword || ""}
        handleOnChange={handleOnChange}
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
