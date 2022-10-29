import { useEffect, useState } from "react";

import CEPService from "../../../../../services/apiBrasil/CEPService";

import Input from "../../../../../components/form/Input/Input";
import Submit from "../../../../../components/form/Submit/Submit";

const TAB_INDEX = 1;

const BloodcenterAddress = ({ setTabIndex, setTabSteps }) => {
  const initialData = JSON.parse(localStorage.getItem("data"));

  const [data, setData] = useState(
    initialData || {
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      estado: "",
      cidade: "",
      ponto_referencia: "",
    }
  );

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    cep: {
      number: false,
      errorMessage: false,
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!data.numero) {
      return setErrors({
        cep: {
          number: true,
          errorMessage: "Preencha esse campo.",
        },
      });
    }

    setErrors({
      cep: {
        number: false,
        errorMessage: false,
      },
    });

    setTabIndex(2);
    setTabSteps((tabSteps) => {
      const copy = tabSteps;
      copy.push(TAB_INDEX);
      return copy;
    });

    localStorage.setItem("data", JSON.stringify({ ...initialData, ...data }));
  };

  useEffect(() => {
    CEPService(data.cep).then((resp) => {
      setData((prevState) => {
        return {
          ...prevState,
          logradouro: resp.street || "",
          bairro: resp.neighborhood || "",
          estado: resp.state || "SP",
          cidade: resp.city || "",
        };
      });
    });
  }, [data.cep]);

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Endereço</h3>
      <Input
        info="CEP"
        placeholder="CEP"
        mask="00000-000"
        name="cep"
        value={data.cep}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Logradouro"
        placeholder="Logradouro"
        name="logradouro"
        value={data.logradouro || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Número"
        placeholder="Número"
        name="numero"
        error={errors.cep.number}
        errorMessage={errors.cep.errorMessage}
        value={data.numero || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Bairro"
        placeholder="Bairro"
        name="bairro"
        value={data.bairro || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Estado"
        placeholder="Estado"
        name="estado"
        value={data.estado || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Cidade"
        placeholder="Cidade"
        name="cidade"
        value={data.cidade || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <Input
        info="Ponto de referência"
        placeholder="Ponto de referência"
        name="ponto_referencia"
        value={data.ponto_referencia || ""}
        handleOnChange={handleOnChange}
      />
      <Submit
        action="Próximo"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/bloodcenter/login"
      />
    </form>
  );
};

export default BloodcenterAddress;
