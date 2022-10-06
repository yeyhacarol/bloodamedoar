import { Link } from "react-router-dom";

import styles from "./Submit.module.css";

const Submit = ({
  action,
  instruction,
  link,
  to,
  id,
  customClass,
  handleOnClick,
}) => {
  return (
    <div className={styles.button_container}>
      <button
        type="submit"
        className={`${styles.button} ${customClass}`}
        onClick={handleOnClick}
        id={id}
      >
        {action}
      </button>

      {instruction ? (
        <div className={styles.already_has_registration}>
          <p>
            {instruction}
            <Link to={to}>{link}</Link>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Submit;
