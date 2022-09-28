import styles from "./Submit.module.css";

const Submit = ({ action, instruction, link, id, customClass }) => {
  return (
    <div className={styles.button_container}>
      <button
        type="submit"
        className={`${styles.button} ${customClass}`}
        id={id}
      >
        {action}
      </button>

      {instruction ? (
        <div className={styles.already_has_registration}>
          <p>
            {instruction}
            <span>{link}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Submit;
