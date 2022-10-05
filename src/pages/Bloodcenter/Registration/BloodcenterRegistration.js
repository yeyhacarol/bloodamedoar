import styles from "./BloodcenterRegistration.module.css";

import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import Heading from "../../../components/Heading/Heading";
import Steps from "../../../components/Steps/Steps";
import Input from "../../../components/form/Input/Input";
import Selection from "../../../components/form/Select/Select";
import Submit from "../../../components/form/Submit/Submit";
import Bloodflow from "../../../components/Bloodflow/Bloodflow";

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
          {/* <h3>Dados do hemocentro</h3>
          <Input
            placeholder="Nome do hemocentro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={}  
          />
          <div className={styles.chk}>
            <Input
              type="checkbox"
              label="Sou unidade"
              /* error={} errorMessage={} name="unity" value={} handleOnClick={} 
            />
            <Input
              type="checkbox"
              label="Sou sede" /* error={} errorMessage={} name="headOffice" value={} handleOnChange={}  
            />
          </div>
          <Input
            placeholder="Nome da sede" /* error={} errorMessage={} name="unityName" value={} handleOnChange={}  
          />
          <Input
            placeholder="CNPJ"
            mask="00.000.000/0000-00" /* error={} errorMessage={} name="cnpj" value={} handleOnChange={}  
          />
          <Selection
            isMulti="true"
            closeMenuOnSelect="false"
            placeholder="Tipos de serviço"
            name="services"
            message="Sem serviços"
            /* options={}
            onChange={} 
          />
          <Submit
            customClass={styles.custom_button}
            action="Próximo"
            instruction="Já possui cadastro?"
            link="Entrar"
            to="/login"
          /> */}

          {/* <h3>Endereço</h3>
          <Input
            placeholder="CEP" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Logradouro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Número" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Bairro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Estado" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Cidade" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Input
            placeholder="Ponto de referência" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} 
          />
          <Submit
            customClass={styles.custom_button}
            action="Próximo"
            instruction="Já possui cadastro?"
            link="Entrar"
            to="/login"
          /> */}

          <h3>Contato</h3>
          <Input
            mask="(00) 00000-0000"
            placeholder="Número de telefone" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
          />
          <Input
            type="email"
            placeholder="E-mail" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
          />

          <h3>Conta</h3>
          <Input
            type="password"
            placeholder="Senha" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
          />
          <Input
            type="password"
            placeholder="Confirmação de senha" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
          />

          <Submit
            customClass={styles.custom_button}
            action="Cadastrar"
            instruction="Já possui cadastro?"
            link="Entrar"
            to="/login"
          />
        </form>
      </div>

      <Bloodflow />
    </div>
  );
};

export default BloodcenterRegistration;
