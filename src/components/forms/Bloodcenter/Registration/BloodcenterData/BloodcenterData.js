import styles from "./BloodcenterData.module.css";

import Input from "../../../../form/Input/Input";
import Selection from "../../../../form/Select/Selection";
import Submit from "../../../../form/Submit/Submit";

const BloodcenterData = () => {
  return (
    <>
      <h3>Dados do hemocentro</h3>
      <Input
        placeholder="Nome do hemocentro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={}  */
      />
      <div className={styles.chk}>
        <Input
          type="checkbox"
          label="Sou unidade"
          /* error={} errorMessage={} name="unity" value={} handleOnClick={} */
        />
        <Input
          type="checkbox"
          label="Sou sede" /* error={} errorMessage={} name="headOffice" value={} handleOnChange={}  */
        />
      </div>
      <Input
        placeholder="Nome da sede" /* error={} errorMessage={} name="unityName" value={} handleOnChange={}  */
      />
      <Input
        placeholder="CNPJ"
        mask="00.000.000/0000-00" /* error={} errorMessage={} name="cnpj" value={} handleOnChange={}  */
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
    </>
  );
};

export default BloodcenterData;
