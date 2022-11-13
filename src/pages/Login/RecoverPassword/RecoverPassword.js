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

      <div className={styles.recover_password}>
        <form className={styles.recover_password_content}>
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
            custom={styles.input}
            type="password"
            placeholder="Sua senha"
            name="senha" /*error={} errorMessage={} value={} handleOnChange={}*/
          />

          <Input
            custom={styles.input}
            type="password"
            placeholder="Confirme sua senha"
            name="senha"
            // value={data.senha}
            // handleOnChange={handleOnChange}
          />

          <Button
            customClass={styles.submit}
            action="Confirmar"
            // link=""
            // onClick={handleOnSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
