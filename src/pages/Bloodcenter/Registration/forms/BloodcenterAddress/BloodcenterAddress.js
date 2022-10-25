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

  const [disable, setDisable] = useState();

  useEffect(() => {
    CEPService(data.cep)
      .then((resp) => {
        setData((prevState) => {
          return {
            ...prevState,
            logradouro: resp.street || data.logradouro,
            bairro: resp.neighborhood,
            estado: resp.state,
            cidade: resp.city,
          };
        });

        console.log(resp.street);

        if (!data.logradouro) {
          setDisable(false);
        }
      })
      .catch(() => {
        setDisable(true);
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
        disabled
      />
      <Input
        placeholder="Logradouro"
        name="street"
        value={data.logradouro || ""}
        handleOnChange={handleOnChange}
        disable={disable}
      />
      <Input
        placeholder="Número"
        name="numero"
        error={errors.cep.number}
        errorMessage={errors.cep.errorMessage}
        value={data.numero || ""}
        handleOnChange={handleOnChange}
        disable={!data.numero ? false : true}
      />
      <Input
        placeholder="Bairro"
        name="neighbourhood"
        value={data.bairro || ""}
        handleOnChange={handleOnChange}
        disable={!data.bairro ? false : true}
      />
      <Input
        placeholder="Estado"
        name="state"
        value={data.estado || ""}
        handleOnChange={handleOnChange}
        disable={!data.estado ? false : true}
      />
      <Input
        placeholder="Cidade"
        name="city"
        value={data.cidade || ""}
        handleOnChange={handleOnChange}
        disable={!data.cidade ? false : true}
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
        to="/bloodcenter/login"
      />
    </form>
  );
};

export default BloodcenterAddress;
