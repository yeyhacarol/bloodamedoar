import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import styles from "./RecoverPassword.module.css";
import Heading from "../../../components/Heading/Heading";
import bloobers from "../../../assets/bloobs/bloobers.svg";
import Input from "../../../components/form/Input/Input";
import Button from "../../../components/layout/Button/Button";

const RecoverPassword = () => {
  return (
    <div className={styles.container_recover_password}>
      <img src={bloobers} alt="Decoração" className={styles.bloobers} />

      <div className={styles.logo}>
        <IconLogo />
      </div>

      <div className={styles.container_center}>
        <div className={styles.heading}>
          <Heading heading="Alterar senha" />

          <Input
            name="email"
            type="email"
            placeholder="seuemail@gmail.com"
            // info="E-mail"
            // value={data.email || ""}
            // handleOnChange={handleOnChange}
          />

          <Input
            type="password"
            placeholder="Senha"
            name="senha"
            // value={data.senha}
            // handleOnChange={handleOnChange}
          />

          <Input
            type="password"
            placeholder="Confirmar senha "
            name="senha"
            // value={data.senha}
            // handleOnChange={handleOnChange}
          />

          <Button
            customClass={styles.signin}
            action=" Salvar senha "
            // link=""
            // onClick={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
