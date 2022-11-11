import styles from "./Disable.module.css";

import ModalLogo from "../../../../../components/logo/ModalLogo/ModalLogo";
import Heading from "../../../../../components/Heading/Heading";
import Button from "../../../../../components/layout/Button/Button";

import close from "../../../../../assets/bloobs/close.png";
import { useState } from "react";
import ConfirmDisable from "./ConfirmDisable/ConfirmDisable";

const Disable = ({ setVisible, visible }) => {
  const [visibility, setVisibility] = useState(false);

  if (visible) {
    document.getElementById("html").style.overflow = "hidden";
  } else {
    document.getElementById("html").style.overflow = "auto";
  }

  return (
    <div className={`${styles.disable} ${visible && styles.active}`}>
      <div className={styles.disable_container}>
        <div className={styles.close_container}>
          <div
            className={styles.close}
            onClick={() => {
              setVisible(false);
            }}
          >
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
          <div className={styles.options}>
            <Button
              action="Confirmar"
              onClick={() => {
                setVisibility(true);
                setVisible(false);
              }}
            />
            <Button
              action="Negar"
              onClick={() => {
                setVisible(false);
              }}
            />
          </div>
        </div>
      </div>

      <ConfirmDisable visibility={visibility} />
    </div>
  );
};

export default Disable;
