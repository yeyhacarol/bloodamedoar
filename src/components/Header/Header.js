import styles from "./Header.module.css";

import Submit from "../../components/form/Submit/Submit";

const Header = ({ span, action }) => {
  return (
    <div className={styles.header_container}>
      {span ? (
        <div className={styles.span_header}>
          {span ? <span>{span}</span> : <></>}
        </div>
      ) : (
        <></>
      )}

      {action ? (
        <div className={styles.submit_header}>
          <Submit customClass={styles.custom_button} action={action} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
