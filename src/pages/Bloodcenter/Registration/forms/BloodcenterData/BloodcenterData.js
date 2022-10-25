import { useEffect, useState } from "react";
import styles from "./BloodcenterData.module.css";

import CNPJService from "../../../../../services/apiBrasil/CNPJService";

import Input from "../../../../../components/form/Input/Input";

import Submit from "../../../../../components/form/Submit/Submit";

const TAB_INDEX = 1;

const BloodcenterData = ({ setTabIndex, setTabSteps }) => {
  const dataStorage = localStorage.getItem("data");

  const initialData = dataStorage
    ? JSON.parse(dataStorage)
    : {
        nome_unidade: "",
        unidade_sede: false,
        nome_sede: "",
        cnpj: "",
        cep: "",
        numero: "",
      };

  const [data, setData] = useState(initialData);

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    cnpj: {
      number: false,
      errorMessage: false,
    },
  });

  const handleValidate = (e) => {
    e.preventDefault();

    if (!data.cnpj) {
      setErrors({
        ...errors,
        cnpj: {
          number: true,
          errorMessage: "Campo obrigatório.",
        },
      });

      setData((prevState) => {
        return {
          nome_unidade: "",
          unidade_sede: false,
          nome_sede: "",
          cnpj: prevState.cnpj,
        };
      });

      return;
    }

    if (data.cnpj.length !== 14) {
      setErrors({
        ...errors,
        cnpj: {
          number: true,
          errorMessage: "CNPJ inválido.",
        },
      });

      setData((prevState) => {
        return {
          nome_unidade: "",
          unidade_sede: false,
          nome_sede: "",
          cnpj: prevState.cnpj,
        };
      });

      return;
    }

    if (errors.cnpj.number) {
      setData((prevState) => {
        return {
          nome_unidade: "",
          unidade_sede: false,
          nome_sede: "",
          cnpj: prevState.cnpj,
        };
      });
    }

    if (!errors.cnpj.number) {
      setTabIndex(TAB_INDEX);
      setTabSteps((tabSteps) => {
        const copy = tabSteps;
        copy.push(TAB_INDEX);
        return copy;
      });

      localStorage.setItem("data", JSON.stringify(data));
    }
  };

  useEffect(() => {
    if (data.cnpj.length === 14) {
      CNPJService(data.cnpj).then((resp) => {
        if (resp.message) {
          return setErrors({
            ...errors,
            cnpj: {
              number: true,
              errorMessage: "CNPJ não encontrado.",
            },
          });
        }

        setData((prevState) => {
          return {
            ...prevState,
            cnpj: resp.cnpj,
            nome_unidade: resp.nome_fantasia
              ? resp.nome_fantasia
              : resp.razao_social,
            unidade_sede:
              resp.descricao_identificador_matriz_filial === "MATRIZ"
                ? setData((value) => ({ ...value, unidade_sede: true }))
                : setData((value) => ({ ...value, unidade_sede: false })),
            nome_sede:
              resp.descricao_identificador_matriz_filial === "FILIAL"
                ? resp.nome_fantasia
                : resp.razao_social,
            cep: resp.cep,
            numero: resp.numero,
          };
        });
      });

      return setErrors({
        cnpj: {
          number: false,
          errorMessage: false,
        },
      });
    }
  }, [data.cnpj]);

  return (
    <form onSubmit={handleValidate}>
      <h3>Dados do hemocentro</h3>
      <Input
        mask="00.000.000-0000/00"
        info="CNPJ"
        placeholder="00.000.000-0000/00"
        error={errors.cnpj.number}
        errorMessage={errors.cnpj.errorMessage}
        name="cnpj"
        value={data.cnpj || ""}
        handleOnChange={handleOnChange}
      />
      <Input
        info="Nome do hemocentro"
        placeholder="Nome do hemocentro"
        name="nome_unidade"
        value={data.nome_unidade || ""}
        handleOnChange={handleOnChange}
        disabled
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou sede"
          id="2"
          name="unidade_sede"
          checked={data.unidade_sede ? true : false}
          onClick={(value, name) => handleOnChange(value, name)}
          disabled
        />
      </div>
      {data.unity && (
        <Input
          info="Nome da sede"
          placeholder="Nome da sede"
          name="nome_sede"
          value={data.nome_sede || ""}
          handleOnChange={handleOnChange}
          disabled
        />
      )}
      <Submit
        customClass={styles.custom_button}
        action="Próximo"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/bloodcenter/login"
      />
    </form>
  );
};

export default BloodcenterData;
