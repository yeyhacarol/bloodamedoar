import styles from "./Textarea.module.css";

const Textarea = ({ name, placeholder, info, value, handleOnChange }) => {
  return (
    <div className={styles.textarea_container}>
      <label>{info}</label>
      <textarea
        className={styles.textarea}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e.target.value, name)}
      ></textarea>
    </div>
  );
};

export default Textarea;
