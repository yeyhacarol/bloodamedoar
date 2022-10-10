import { useEffect, useState } from "react";
import styles from "./BloodcenterData.module.css";

import CNPJService from "../../../../../services/apiBrasil/CNPJService";
import getTypeDonation from "../../../../../services/apiBlood/getTypeDonationService";

import Input from "../../../../form/Input/Input";
import Selection from "../../../../form/Select/Selection";
import Submit from "../../../../form/Submit/Submit";

const TAB_INDEX = 1;

const BloodcenterData = ({ setTabIndex, setTabSteps }) => {
  const dataStorage = localStorage.getItem("data");

  const initialData = dataStorage
    ? JSON.parse(dataStorage)
    : {
        bloodcenterName: "",
        unity: false,
        headOffice: false,
        headOfficeName: "",
        cnpj: "",
        services: [],
        cep: "",
      };

  const [data, setData] = useState(initialData);

  const [services, setServices] = useState([]);

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));
  };

  const [errors, setErrors] = useState({
    cnpj: {
      number: false,
      errorMessage: false,
    },
    services: {
      type: false,
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

    if (data.services.length === 0) {
      return setErrors({
        ...errors,
        services: {
          type: true,
          errorMessage: "Escolha ao menos um tipo de serviço.",
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
    let services = [];

    getTypeDonation().then((resp) => {
      resp.map((service) => {
        return services.push({
          value: `${service.id}`,
          label: service.tipo_servico,
        });
      });

      setServices(services);
    });
  }, []);

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
            bloodcenterName: resp.nome_fantasia
              ? resp.nome_fantasia
              : resp.razao_social,
            unity:
              resp.descricao_identificador_matriz_filial === "FILIAL"
                ? setData((value) => ({ ...value, unity: true }))
                : setData((value) => ({ ...value, unity: false })),
            headOffice:
              resp.descricao_identificador_matriz_filial === "MATRIZ"
                ? setData((value) => ({ ...value, headOffice: true }))
                : setData((value) => ({ ...value, headOffice: false })),
            headOfficeName:
              resp.descricao_identificador_matriz_filial === "FILIAL"
                ? resp.nome_fantasia
                : "",
            cep: resp.cep,
          };
        });
      });

      return setErrors({
        cnpj: {
          number: false,
          errorMessage: false,
        },
        services: {
          type: false,
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
        value={data.bloodcenterName || ""}
        handleOnChange={handleOnChange}
        disable={true}
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou unidade"
          id="1"
          name="unity"
          checked={data.unity ? true : false}
          onClick={(value, name) => handleOnChange(value, name)}
          disable={true}
        />
        <Input
          type="checkbox"
          label="Sou sede"
          id="2"
          name="headOffice"
          checked={data.headOffice ? true : false}
          onClick={(value, name) => handleOnChange(value, name)}
          disable={true}
        />
      </div>
      {data.unity && (
        <Input
          placeholder="Nome da sede"
          name="unityName"
          value={data.headOfficeName || ""}
          handleOnChange={handleOnChange}
          disable={true}
        />
      )}
      <Selection
        closeMenuOnSelect="false"
        placeholder="Tipos de serviço"
        error={errors.services.type}
        errorMessage={errors.services.errorMessage}
        name="services"
        message="Sem serviços"
        value={data.services}
        options={services && services}
        handleOnChange={handleOnChange}
      />
      <Submit
        customClass={styles.custom_button}
        action="Próximo"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/login"
      />
    </form>
  );
};

export default BloodcenterData;
