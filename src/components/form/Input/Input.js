import { useState } from "react";
import { IMaskInput } from "react-imask";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

import styles from "./Input.module.css";

const Input = ({
  type,
  placeholder,
  mask,
  label,
  error,
  errorMessage = "Campo obrigatório.",
  name,
  id,
  value,
  handleOnChange,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.input_container}>
      {mask ? (
        <IMaskInput
          className={styles.input}
          placeholder={placeholder}
          mask={mask}
          name={name}
          value={value}
          onAccept={(value) => handleOnChange(value, name)}
        />
      ) : (
        <>
          {type === "password" ? (
            <>
              <input
                className={styles.input}
                type={passwordShown ? "text" : "password"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handleOnChange(e.target.value, name)}
              />
              {passwordShown ? (
                <AiOutlineEye
                  size={25}
                  className={styles.icon}
                  onClick={() => {
                    togglePassword();
                  }}
                />
              ) : (
                <AiOutlineEyeInvisible
                  size={25}
                  className={styles.icon}
                  onClick={() => {
                    togglePassword();
                  }}
                />
              )}
            </>
          ) : (
            <>
              {type === "checkbox" ? (
                <div className={styles.checkbox}>
                  <input type={type} name={name} value={value} id={id} />
                  <label htmlFor={id}>{label}</label>
                </div>
              ) : (
                <input
                  className={styles.input}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                />
              )}
            </>
          )}
          {error && (
            <span className={styles.error_message}>
              <MdErrorOutline size={20} /> {errorMessage}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
