import { MdErrorOutline } from "react-icons/md";
import styles from "./Textarea.module.css";

const Textarea = ({
  name,
  placeholder,
  info,
  value,
  handleOnChange,
  custom,
  error,
  errorMessage,
}) => {
  return (
    <div className={styles.textarea_container}>
      <label>{info}</label>
      <textarea
        className={`${styles.textarea} ${custom}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e.target.value, name)}
      ></textarea>
      {error && (
        <span className={styles.error_message}>
          <MdErrorOutline size={20} /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Textarea;
