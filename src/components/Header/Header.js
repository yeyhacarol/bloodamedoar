import styles from "./Header.module.css";

import IconLogo from "../logo/IconLogo/IconLogo";
import Button from "../../components/layout/Button/Button";

const Header = ({ span, action }) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>

      {span ? <div>{span ? <span>{span}</span> : <></>}</div> : <></>}

      {action ? (
        <div className={styles.button}>
          <Button action={action} link="/identification" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
