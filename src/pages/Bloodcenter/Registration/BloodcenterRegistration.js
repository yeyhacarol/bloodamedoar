import styles from "./BloodcenterRegistration.module.css";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Steps from "../../../components/Steps/Steps";
import Input from "../../../components/form/Input/Input";
import Selection from "../../../components/form/Select/Select";
import Submit from "../../../components/form/Submit/Submit";

const BloodcenterRegistration = () => {
  return (
    <div className={styles.registration_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={styles.registration_content}>
        <Heading heading="Cadastrar-se" />
        <Steps />
        <form>
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
            action="Próximo"
            instruction="Já possui cadastro?"
            link="Entrar"
            to="/login"
          />
        </form>
      </div>
    </div>
  );
};

export default BloodcenterRegistration;
