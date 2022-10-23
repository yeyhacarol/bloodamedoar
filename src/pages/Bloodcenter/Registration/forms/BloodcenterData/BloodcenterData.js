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
      return setErrors({
        ...errors,
        cnpj: {
          number: true,
          errorMessage: "Campo obrigatório.",
        },
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
        placeholder="CNPJ"
        error={errors.cnpj.number}
        errorMessage={errors.cnpj.errorMessage}
        name="cnpj"
        value={data.cnpj || ""}
        handleOnChange={handleOnChange}
      />
      <Input
        placeholder="Nome do hemocentro"
        name="bloodcenterName"
        value={data.nome_unidade || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou sede"
          id="2"
          name="headOffice"
          checked={data.unidade_sede ? true : false}
          onClick={(value, name) => handleOnChange(value, name)}
          disable={true}
        />
      </div>
      {data.unity && (
        <Input
          placeholder="Nome da sede"
          name="unityName"
          value={data.nome_sede || ""}
          handleOnChange={handleOnChange}
          disable={true}
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
