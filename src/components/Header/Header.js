import styles from "./Header.module.css";

import Button from "../../components/layout/Button/Button";

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
          <Button action={action} link="/identification" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
