import Input from "../../../../../../components/form/Input/Input";
import Heading from "../../../../../../components/Heading/Heading";
import Button from "../../../../../../components/layout/Button/Button";
import ModalLogo from "../../../../../../components/logo/ModalLogo/ModalLogo";

import close from "../../../../../../assets/bloobs/close.png";

import styles from "./ConfirmDisable.module.css";

const ConfirmDisable = ({ visibility }) => {
  return (
    <>
      {visibility && (
        <div className={styles.confirm_disable}>
          <div className={styles.confirm_disable_container}>
            <div className={styles.close_container}>
              <div className={styles.close}>
                <img src={close} alt="Fechar modal" title="Fechar modal?" />
                <span>X</span>
              </div>
            </div>
            <div className={styles.disable_content}>
              <div className={styles.logo}>
                <ModalLogo />
              </div>
              <Heading heading="Desativar conta" />
              <p className={styles.obs}>
                Para ajudar a proteger sua conta, nós queremos confirmar se você
                quer realmente desativar sua conta.
              </p>
              <Input />
              <Input />
              <Button action="Confirmar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDisable;
