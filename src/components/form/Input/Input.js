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
  errorMessage,
  name,
  value,
  handleOnChange,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {mask ? (
        <div className={styles.input_container}>
          <IMaskInput
            className={styles.input}
            placeholder={placeholder}
            mask={mask}
            name={name}
            value={value}
            onAccept={(value) => handleOnChange(value, name)}
          />
          {error && (
            <span className={styles.error_message}>
              <MdErrorOutline /> {errorMessage}
            </span>
          )}
        </div>
      ) : (
        <>
          {type === "password" ? (
            <div className={styles.password_input}>
              <div className={styles.input_container}>
                <input
                  className={styles.input}
                  type={passwordShown ? "text" : "password"}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={(e) => handleOnChange(e.target.value, name)}
                />
                {error && (
                  <span className={styles.error_message}>
                    <MdErrorOutline /> {errorMessage}
                  </span>
                )}
              </div>
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
                <div className={styles.input_container}>
                  <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(e) => handleOnChange(e.target.value, name)}
                  />
                  {error && (
                    <span className={styles.error_message}>
                      <MdErrorOutline /> {errorMessage}
                    </span>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Input;
