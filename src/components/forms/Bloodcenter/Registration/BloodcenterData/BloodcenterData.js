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
    setData((prevState) => ({ ...prevState, [input]: value }));

    console.log(data);
  };

  return (
    <>
      <h3>Dados do hemocentro</h3>
      <Input
        placeholder="Nome do hemocentro"
        /* error={} errorMessage={} */ name="bloodcenterName"
        value={data.bloodcenterName}
        handleOnChange={handleOnChange}
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou unidade"
          id="1"
          /* error={} errorMessage={} */ name="unity"
        />
        <Input
          type="checkbox"
          label="Sou sede"
          id="2"
          /* error={} errorMessage={} */ name="headOffice"
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
        /* error={} errorMessage={} */ name="cnpj"
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
        handleOnClick={onClick}
      />
    </>
  );
};

export default BloodcenterData;
