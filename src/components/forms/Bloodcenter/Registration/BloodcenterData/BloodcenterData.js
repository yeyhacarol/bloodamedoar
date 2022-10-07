import { useState } from "react";
import styles from "./BloodcenterData.module.css";

import Input from "../../../../form/Input/Input";
import Selection from "../../../../form/Select/Selection";
import Submit from "../../../../form/Submit/Submit";

const BloodcenterData = ({ onClick }) => {
  const [data, setData] = useState({
    bloodcenterName: "",
    unity: false,
    headOffice: false,
    unityName: "",
    cnpj: "",
    services: [],
  });

  const handleOnChange = (input, value) => {
    setData((prevState) => ({ ...prevState, [value]: input }));

    console.log(data);
  };

  const [errors, setErrors] = useState({
    bloodcenterName: false,
    unity: false,
    headOffice: false,
    unityName: false,
    cnpj: false,
    errorMessage: "",
  });

  const handleValidate = (e) => {
    e.preventDefault();

    if (!data.bloodcenterName && !data.cnpj) {
      return setErrors({
        ...errors,
        bloodcenterName: true,
        cnpj: true,
        errorMessage: "Campo obrigatório.",
      });
    }

    if (!data.unity || !data.headOffice) {
      return setErrors({ ...errors, unity: true, headOffice: true });
    }

    if (data.cnpj.length < 18) {
      return setErrors({
        ...errors,
        cnpj: true,
        errorMessage: "Preencha corretamente.",
      });
    }

    setErrors({
      bloodcenterName: false,
      unity: false,
      headOffice: false,
      unityName: false,
      cnpj: false,
    });
  };

  return (
    <form onSubmit={handleValidate}>
      <h3>Dados do hemocentro</h3>
      <Input
        placeholder="Nome do hemocentro"
        errorMessage={errors.errorMessage}
        error={errors.bloodcenterName}
        name="bloodcenterName"
        value={data.bloodcenterName}
        handleOnChange={handleOnChange}
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou unidade"
          id="1"
          error={errors.unity}
          name="unity"
          onClick={(value, name) => handleOnChange(value, name)}
        />
        <Input
          type="checkbox"
          label="Sou sede"
          id="2"
          error={errors.headOffice}
          name="headOffice"
          value={data.headOffice}
          onClick={(value, name) => handleOnChange(value, name)}
        />
      </div>
      <Input
        placeholder="Nome da sede"
        /* error={} errorMessage={}  */ name="unityName"
        value={data.unityName}
        handleOnChange={handleOnChange}
      />
      <Input
        placeholder="CNPJ"
        mask="00.000.000/0000-00"
        error={errors.cnpj}
        errorMessage={errors.errorMessage}
        name="cnpj"
        value={data.cnpj}
        handleOnChange={handleOnChange}
      />
      <Selection
        isMulti="true"
        closeMenuOnSelect="false"
        placeholder="Tipos de serviço"
        name="services"
        message="Sem serviços"
        /* options={}
            onChange={} */
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
