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
  id,
  value,
  handleOnChange,
  onClick,
  checked,
  custom,
  info,
  onFocus,
  ...props
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={`${styles.input_container} ${custom}`}>
      {mask ? (
        <>
          <label>{info}</label>
          <IMaskInput
            className={`${styles.input} ${custom}`}
            placeholder={placeholder}
            mask={mask}
            unmask={true}
            name={name}
            value={value}
            {...props}
            onFocus={onFocus}
            onAccept={(value) => handleOnChange(value, name)}
          />
        </>
      ) : (
        <>
          {type === "password" ? (
            <>
              <label>{info}</label>
              <input
                className={`${styles.input} ${custom}`}
                type={passwordShown ? "text" : "password"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handleOnChange(e.target.value, name)}
                onFocus={onFocus}
                {...props}
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
                  <input
                    type={type}
                    name={name}
                    value={value}
                    id={id}
                    onChange={(e) => onClick(e.currentTarget.checked, name)}
                    checked={checked}
                    {...props}
                  />
                  <label htmlFor={id}>{label}</label>
                </div>
              ) : (
                <>
                  <label>{info}</label>
                  <input
                    className={`${styles.input} ${custom}`}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(e) => handleOnChange(e.target.value, name)}
                    onFocus={onFocus}
                    {...props}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
      {error && (
        <span className={styles.error_message}>
          <MdErrorOutline size={20} /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
