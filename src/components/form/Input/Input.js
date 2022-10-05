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
  value,
  handleOnChange,
  handleOnClick,
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
            <div className={styles.input_container}>
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
            </div>
          ) : (
            <>
              {type === "checkbox" ? (
                <div className={styles.checkbox}>
                  <input type={type} name={name} value={value} id="mark" />
                  <label htmlFor="mark">{label}</label>
                </div>
              ) : (
                <input
                  className={styles.input}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onClick={(e) => handleOnClick(e.currentTarget.checked, name)}
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
