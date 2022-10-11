import { useEffect, useState } from "react";

import CEPService from "../../../../../services/apiBrasil/CEPService";

import Input from "../../../../form/Input/Input";
import Submit from "../../../../form/Submit/Submit";

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
          logradouro: resp.street,
          bairro: resp.neighborhood,
          estado: resp.state,
          cidade: resp.city,
        };
      });
    });
  }, [data.cep]);

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Endereço</h3>
      <Input
        placeholder="CEP"
        mask="00000-000"
        name="cep"
        value={data.cep}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <Input
        placeholder="Logradouro"
        name="street"
        value={data.logradouro || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <Input
        placeholder="Número"
        name="numero"
        error={errors.cep.number}
        errorMessage={errors.cep.errorMessage}
        value={data.numero || ""}
        handleOnChange={handleOnChange}
      />
      <Input
        placeholder="Bairro"
        name="neighbourhood"
        value={data.bairro || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <Input
        placeholder="Estado"
        name="state"
        value={data.estado || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <Input
        placeholder="Cidade"
        name="city"
        value={data.cidade || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <Input
        placeholder="Ponto de referência"
        name="landmark"
        value={data.ponto_referencia || ""}
        handleOnChange={handleOnChange}
      />
      <Submit
        action="Próximo"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/login"
      />
    </form>
  );
};

export default BloodcenterAddress;
